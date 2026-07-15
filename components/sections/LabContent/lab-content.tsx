"use client"

import PageContent from "@/components/layout/PageContent/page-content"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { useLabProjects } from "@/hooks/use-lab-projects/use-lab-projects"

/**
 * Lab content
 */

export function LabContent() {
  const labProjects = useLabProjects()

  return (
    <PageContent
      eyebrow="lab.eyebrow"
      title="lab.title"
      subtitle="lab.subtitle"
    >
      {labProjects.map((project) => (
        <ListRow
          key={project.slug}
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
