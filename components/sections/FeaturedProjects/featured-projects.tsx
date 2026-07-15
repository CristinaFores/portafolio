"use client"

import { useTranslations } from "next-intl"

import { ProjectsList } from "@/components/sections/ProjectsList/projects-list"
import { HomeListSection } from "@/components/ui/HomeListSection/home-list-section"
import { ROUTES } from "@/lib/routes"

/**
 * Project case-study rows on the home page (one per client, curated set).
 */
export function FeaturedProjects() {
  const t = useTranslations()

  return (
    <HomeListSection
      id="projects"
      className="bg-card"
      eyebrow={t("work.index")}
      title={t("work.headline")}
      subtitle={t("work.subtitle")}
      viewAll={{ href: ROUTES.projects, label: t("work.viewAll") }}
    >
      <ProjectsList isFeatured />
    </HomeListSection>
  )
}
