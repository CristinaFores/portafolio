"use client"

import { getFeaturedProjects } from "@/lib/data/projects"
import { ProjectCaseRow } from "@/components/sections/ProjectCaseRow/project-case-row"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { useTranslations } from "next-intl"
import { ROUTES } from "@/lib/routes"

/**
 * Project case-study rows on the home page (one per client, curated set).
 */
export function FeaturedProjects() {
  const t = useTranslations()
  const projects = getFeaturedProjects()

  return (
    <section id="projects" className="home-section home-section-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 max-lg:gap-6">
        <div className="flex justify-between items-center">
        <SectionHeading
          eyebrow={t("work.index")}
          title={t("work.headline")}
          subtitle={t("work.subtitle")}
        />
        <ViewAllLink href={ROUTES.projects} label={t("work.viewAll")} />
        </div>
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCaseRow key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>
        <ViewAllLink className="md:hidden" href={ROUTES.projects} label={t("work.viewAll")} />
      </div>
    </section>
  )
}
