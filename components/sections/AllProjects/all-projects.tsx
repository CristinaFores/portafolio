"use client"

import { getProjectsForDisplay } from "@/lib/data/projects"
import { ProjectCaseRow } from "@/components/sections/ProjectCaseRow/project-case-row"
import { PageHeader } from "@/components/ui/PageHeader/page-header"
import { useLocale } from "@/i18n/locale-context"

/**
 * Full project listing for the /projects route.
 */
export function AllProjects() {
  const { t } = useLocale()
  const projects = getProjectsForDisplay()

  return (
    <div className="px-6 pb-28 pt-28 md:pt-32">
      <div className="mx-auto flex max-w-5xl flex-col gap-14 md:gap-16">
        <PageHeader
          eyebrow={t("work.allIndex")}
          title={t("work.allTitle")}
          subtitle={t("work.allSubhead")}
        />

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCaseRow key={project.slug} slug={project.slug} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
