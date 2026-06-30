"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { getProjectsForDisplay } from "@/lib/data/projects"
import { ProjectCaseRow } from "@/components/project-case-row"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"

/**
 * Project case-study rows on the home page.
 */
const HOME_PROJECT_LIMIT = 6

export function FeaturedProjects() {
  const { t } = useLocale()
  const projects = getProjectsForDisplay().slice(0, HOME_PROJECT_LIMIT)

  return (
    <section id="projects" className="border-t border-border px-6 py-28 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-14 md:gap-16">
        <motion.div {...fadeUp}>
          <SectionHeading
            index={t("work.sectionIndex")}
            title={t("work.sectionTitle")}
            subtitle={t("work.subhead")}
          />
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCaseRow key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>

        <motion.div {...fadeUp}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent"
          >
            {t("work.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
