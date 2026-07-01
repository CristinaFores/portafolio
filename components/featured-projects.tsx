"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/data/projects"
import { ProjectCaseRow } from "@/components/project-case-row"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"

/**
 * Project case-study rows on the home page (one per client, curated set).
 */
export function FeaturedProjects() {
  const { t } = useLocale()
  const { fadeUp } = useMotion()
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="home-section home-section-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 max-lg:gap-6">
        <SectionHeading
          index={t("work.sectionIndex")}
          title={t("work.sectionTitle")}
          subtitle={t("work.subhead")}
        />

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCaseRow key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp()}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline hover:text-accent"
          >
            {t("work.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
