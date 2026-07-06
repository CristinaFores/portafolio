"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Blocks } from "lucide-react"
import type { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/i18n/locale-context"
import { Tag } from "@/components/ui/Tag/tag"
import { ROUTES } from "@/lib/routes"

export type LabProjectRowProps = {
  project: (typeof LAB_PROJECTS)[number]
}

/**
 * Single row in the Lab index — thumbnail, name, status, tagline, tech badges.
 */
export function LabProjectRow({ project }: LabProjectRowProps) {
  const { t, locale } = useLocale()

  return (
    <Link
      href={ROUTES.labProject(project.slug)}
      className="group grid gap-6 border-t border-border py-8 transition-colors hover:border-foreground/30 sm:grid-cols-[64px_1fr]"
    >
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden"
        style={project.iconBg ? { backgroundColor: project.iconBg } : undefined}
      >
        {project.icon ? (
          <Image
            src={project.icon}
            alt={project.name}
            width={64}
            height={64}
            sizes="64px"
            className="h-full w-full object-contain"
          />
        ) : (
          <Blocks className="h-6 w-6 text-accent" />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-base font-semibold text-foreground transition-colors group-hover:text-accent">
            {project.name}
          </h2>
          <Tag variant="status">{t(`lab.status.${project.status}`)}</Tag>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {project.tagline[locale]}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techBadges.slice(0, 4).map((badge) => (
            <Tag key={badge} variant="muted">
              {badge}
            </Tag>
          ))}
          {project.techBadges.length > 4 && (
            <Tag variant="muted">+{project.techBadges.length - 4}</Tag>
          )}
        </div>
        <span className="mt-1 inline-flex items-center gap-1 text-sm text-foreground/75 transition-colors group-hover:text-accent">
          {t("lab.viewDetails")}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  )
}
