"use client"

import { useTranslations } from "next-intl"

import { AnimatedList } from "@/components/ui/AnimatedList/animated-list"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { getFeaturedProjects, PROJECTS } from "@/lib/data/projects"
import { ROUTES } from "@/lib/routes"
import { ProjectBase } from "@/types/project"

interface ProjectsListProps {
  total?: number
  isFeatured?: boolean
}

/**
 * Minimal project row — text-first, small thumbnail on desktop.
 */
export function ProjectsList({ isFeatured = false }: ProjectsListProps) {
  const t = useTranslations()

  const source = isFeatured ? getFeaturedProjects() : PROJECTS

  const projects = source.map((project: ProjectBase) => ({
    id: project.slug,
    href: ROUTES.project(project.slug),
    title: t(`project.items.${project.slug}.title`),
    subtitle: t(`project.items.${project.slug}.subtitle`),
    media: {
      src: project.icon || "/placeholder.svg",
      alt: t(`project.items.${project.slug}.title`),
    },
    tags: project.stack.map((tech) => ({ label: tech })).slice(0, 3),
  }))

  return (
    <ul className="flex flex-col gap-6">
      {projects.map((project, index: number) => (
        <AnimatedList key={project.id} index={index}>
          <ListRow
            href={project.href}
            key={project.href}
            title={project.title}
            subtitle={project.subtitle}
            media={{
              src: project.media.src || "/placeholder.svg",
              alt: project.media.alt || project.title,
            }}
            tags={project.tags}
          />
        </AnimatedList>
      ))}
    </ul>
  )
}
