"use client"

import { useTranslations } from "next-intl"

import PageContent from "@/components/layout/PageContent/page-content"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { ROUTES } from "@/lib/routes"

/**
 * Lab content
 */

export function LabContent() {
  const t = useTranslations()

  const labProjects = LAB_PROJECTS.map((project) => ({
    id: project.slug,
    href: ROUTES.labProject(project.slug),
    title: t(`lab.projects.${project.slug}.title`),
    subtitle: t(`lab.projects.${project.slug}.subtitle`),
    media: { src: project.icon, alt: project.name },
    tags: project.stack?.map((badge) => ({ label: badge })).slice(0, 3) ?? [],
    badge: `${t(`constants.status.${project.status}`)}`,
  }))

  return (
    <PageContent
      eyebrow="lab.eyebrow"
      title="lab.title"
      subtitle="lab.subtitle"
    >
      {labProjects.map((project) => (
        <ListRow
          key={project.id}
          href={project.href}
          title={project.title}
          subtitle={project.subtitle}
          media={project.media}
          tags={project.tags}
          badge={project.badge}
        />
      ))}
    </PageContent>
  )
}
