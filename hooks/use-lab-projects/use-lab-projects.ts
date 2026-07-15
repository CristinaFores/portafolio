"use client"

import { useTranslations } from "next-intl"

import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { ROUTES } from "@/lib/routes"

/**
 * Maps the raw lab project data into the translated, list-ready shape shared by
 * the lab index and the home lab teaser.
 */
export function useLabProjects() {
  const t = useTranslations()

  return LAB_PROJECTS.map((project) => ({
    slug: project.slug,
    href: ROUTES.labProject(project.slug),
    title: t(`lab.projects.${project.slug}.title`),
    subtitle: t(`lab.projects.${project.slug}.subtitle`),
    media: { src: project.icon, alt: project.name },
    tags: project.stack?.map((badge) => ({ label: badge })).slice(0, 3) ?? [],
    badge: t(`constants.status.${project.status}`),
  }))
}
