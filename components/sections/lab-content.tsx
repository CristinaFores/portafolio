"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/locale-context"
import { LabProjectRow } from "@/components/sections/lab-project-row"

/**
 * Lab index — list of projects, each linking to its detail page.
 */
export function LabContent() {
  const { t } = useLocale()

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">

        <header className="flex flex-col gap-6">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t("lab.backToHome")}
          </Link>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-muted-foreground">{t("lab.sectionIndex")}</p>
            <h1 className="text-heading-lg font-semibold leading-tight tracking-[-0.025em]">
              Lab
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("lab.pageSubtitle")}
            </p>
          </div>
        </header>

        <div className="flex flex-col">
          {LAB_PROJECTS.map((project) => (
            <LabProjectRow key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </div>
  )
}
