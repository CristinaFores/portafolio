"use client"

import PageContent from "@/components/layout/PageContent/page-content"
import { ProjectsList } from "@/components/sections/ProjectsList/projects-list"

/**
 * Full project listing for the /projects route.
 */

export function ProjectsContent() {
  return (
    <PageContent
      eyebrow="work.allIndex"
      title="work.allTitle"
      subtitle="work.allSubhead"
    >
      <ProjectsList />
    </PageContent>
  )
}
