"use client"

import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/locale-context"
import { PageHeader } from "@/components/ui/PageHeader/page-header"
import { LabProjectRow } from "@/components/sections/lab-project-row"

/**
 * Lab index — list of projects, each linking to its detail page.
 */
export function LabContent() {
  const { t } = useLocale()

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">

        <PageHeader
          eyebrow={t("lab.sectionIndex")}
          title="Lab"
          subtitle={t("lab.pageSubtitle")}
        />

        <div className="flex flex-col">
          {LAB_PROJECTS.map((project) => (
            <LabProjectRow key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </div>
  )
}
