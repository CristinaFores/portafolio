"use client"

import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useTranslations } from "next-intl"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { ROUTES } from "@/lib/routes"

/**
 * Lab content
 */

export function LabContent() {
  const t = useTranslations()

  const labProjects = LAB_PROJECTS.map((project) => ({
    id: crypto.randomUUID(),
    href: ROUTES.labProject(project.slug),
    title: t(`lab.projects.${project.slug}.title`),
    subtitle: t(`lab.projects.${project.slug}.subtitle`),
    media: { src: project.icon, alt: project.name },
    tags: project.techBadges?.map((badge) => ({ label: badge })).slice(0, 3) ?? [],
    badge: `${t(`constants.status.${project.status}`)}`,
  }))

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          eyebrow={t("lab.eyebrow")}
          title={t("lab.title")}
          subtitle={t("lab.subtitle")}
        />
        <div className="flex flex-col">
          {labProjects.map((project, index) => (
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
        </div>
      </div>
    </div>
  )
}
