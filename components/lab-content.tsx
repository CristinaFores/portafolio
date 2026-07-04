"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, Blocks } from "lucide-react"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/locale-context"
import { Tag } from "@/components/ui/tag"

/**
 * Lab index — list of projects, each linking to its detail page.
 */
export function LabContent() {
  const { t, locale } = useLocale()

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
            <Link
              key={project.slug}
              href={`/lab/${project.slug}`}
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
                    <span key={badge} className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      {badge}
                    </span>
                  ))}
                  {project.techBadges.length > 4 && (
                    <span className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                      +{project.techBadges.length - 4}
                    </span>
                  )}
                </div>
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground/60 transition-colors group-hover:text-accent">
                  {t("lab.viewDetails")}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
