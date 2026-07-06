"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react"
import { getLabProject } from "@/lib/data/lab-projects"
import { LAB_PROJECT } from "@/lib/data/lab-project"
import { TerminalSnippet } from "@/components/ui/TerminalSnippet/terminal-snippet"
import { useLocale } from "@/lib/i18n/locale-context"
import { Tag } from "@/components/ui/Tag/tag"
import { ROUTES } from "@/lib/routes"

type Props = { slug: string }

export function LabDetailContent({ slug }: Props) {
  const { t, locale } = useLocale()
  const project = getLabProject(slug)

  if (!project) return null

const isDCB = slug === "design-context-bridge"

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">

        {/* Header */}
        <header className="flex flex-col gap-6">
          <Link
            href={ROUTES.lab}
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Lab
          </Link>

          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden"
              style={project.iconBg ? { backgroundColor: project.iconBg } : undefined}
            >
              <Image
                src={project.icon}
                alt={project.name}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-heading-md font-semibold leading-tight tracking-[-0.025em]">
                  {project.name}
                </h1>
                <Tag variant="status">{t(`lab.status.${project.status}`)}</Tag>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {project.tagline[locale]}
              </p>
            </div>
          </div>
        </header>

       {/* Cover image */}
        {project.coverImage && (
          <div className="overflow-hidden border border-border max-h-[520px]">
            <Image
              src={project.coverImage}
              alt={project.name}
              width={1200}
              height={800}
              className="w-full object-cover object-top"
            />
          </div>
        )}

        {/* Install command — DCB only */}
        {isDCB && (
          <TerminalSnippet
            command={LAB_PROJECT.installCommand}
            output={[
              "✓ MCP server ready",
              `✓ ${LAB_PROJECT.supportedClients.length} compatible clients detected`,
              "→ listening on stdio",
            ]}
          />
        )}

        <div className="flex flex-col divide-y divide-border">

          {/* Por qué lo construí */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("project.whyIBuiltThis")}</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.whyBuilt[locale]}
            </p>
          </section>

          {/* Qué hace — feature bullets (AuraLang) */}
          {project.features && (
            <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
              <h2 className="font-mono text-xs text-muted-foreground">{t("lab.whatItDoes.title")}</h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                    {feat[locale]}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Cómo funciona */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("lab.howItWorks.title")}</h2>
            <div>
              {project.howItWorks.steps && (
                <ol className="flex flex-col gap-4">
                  {project.howItWorks.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="shrink-0 font-mono text-xs text-muted-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step[locale]}
                    </li>
                  ))}
                </ol>
              )}
              {project.howItWorks.pipeline && (
                <div className="flex flex-wrap items-center gap-2">
                  {project.howItWorks.pipeline.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <Tag variant="muted">{step}</Tag>
                      {i < project.howItWorks.pipeline!.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" />
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Qué expone — DCB only */}
          {isDCB && (
            <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
              <h2 className="font-mono text-xs text-muted-foreground">{t("lab.capabilities.title")}</h2>
              <div className="flex flex-col gap-3">
                {LAB_PROJECT.toolGroups.map((group) => (
                  <div key={group.label.en} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                    <span className="shrink-0 text-sm font-medium text-foreground sm:w-44">{group.label[locale]}</span>
                    <span className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {group.tools.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Modos de uso — DCB only */}
          {isDCB && (
            <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
              <h2 className="font-mono text-xs text-muted-foreground">{t("lab.modes.title")}</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {LAB_PROJECT.modes.map((mode) => (
                  <div key={mode.name.en} className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-foreground">{mode.name[locale]}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{mode.description[locale]}</span>
                    <span className="font-mono text-[11px] text-muted-foreground/60">{mode.status[locale]}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Privacidad — AuraLang */}
          {project.privacy && (
            <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
              <h2 className="font-mono text-xs text-muted-foreground">{t("lab.security.title")}</h2>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {project.privacy[locale]}
              </p>
            </section>
          )}

          {/* Build y herramientas */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("about.skills.build")}</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techBadges.map((badge) => (
                <Tag key={badge} variant="muted">
                  {badge}
                </Tag>
              ))}
            </div>
          </section>

          {/* Enlaces */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("lab.links")}</h2>
            <div className="flex flex-col gap-3">
              {project.links.map((link) => (
                <div key={link.label.en} className="flex items-center gap-3">
                  {link.pending ? (
                    <span className="text-sm text-muted-foreground/50">
                      {link.label[locale]}
                      <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
                        {t("lab.pending")}
                      </span>
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
                    >
                      {link.label[locale]}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

        </div>

        {isDCB && (
          <p className="font-mono text-[11px] text-muted-foreground/55">{t("lab.disclaimer")}</p>
        )}
      </div>
    </div>
  )
}
