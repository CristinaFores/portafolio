"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data/projects"
import { ProjectCard } from "@/components/project-card"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"

/**
 * Highlights the project cards shown on the home page.
 */
export function FeaturedProjects() {
  const { t } = useLocale()

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div
          {...fadeUp}
          className="flex items-baseline justify-between"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("work.sectionTitle")}
          </h2>
          <span className="font-mono text-xs text-muted-foreground/40 tabular-nums">
            {String(projects.length).padStart(2, "0")}
          </span>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
