"use client"

import { useTranslations } from "next-intl"

import { ProjectsList } from "@/components/sections/ProjectsList/projects-list"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { getFeaturedProjects } from "@/lib/data/projects"
import { ROUTES } from "@/lib/routes"

/**
 * Project case-study rows on the home page (one per client, curated set).
 */
export function FeaturedProjects() {
  const t = useTranslations()
  const projects = getFeaturedProjects() // wip

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
        <ProjectsList isFeatured />
        <ViewAllLink
          className="md:hidden"
          href={ROUTES.projects}
          label={t("work.viewAll")}
        />
      </div>
    </section>
  )
}
