"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, ArrowRight, Blocks } from "lucide-react"
import { getLabProject } from "@/lib/data/lab-projects"
import { LAB_PROJECT } from "@/lib/data/lab-project"
import { TerminalSnippet } from "@/components/terminal-snippet"
import { useLocale } from "@/lib/locale-context"

type Props = { slug: string }

/**
 * Detail page for a single lab project.
 */
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
            href="/lab"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Lab
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-border bg-secondary">
              {project.icon ? (
                <Image
                  src={project.icon}
                  alt={project.name}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Blocks className="h-6 w-6 text-accent" />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1
                  className="font-semibold leading-tight tracking-[-0.025em]"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                >
                  {project.name}
                </h1>
                <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  {t("lab.status")}
                </span>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {project.tagline[locale]}
              </p>
            </div>
          </div>
        </header>

        {/* Cover image */}
        {project.coverImage && (
          <div className="overflow-hidden border border-border">
            <Image
              src={project.coverImage}
              alt={project.name}
              width={1200}
              height={isDCB ? 675 : 900}
              className="w-full object-cover"
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

          {/* Why I built this */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("project.whyIBuiltThis")}</h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.whyBuilt[locale]}
            </p>
          </section>

          {/* How it works */}
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
                      <span className="border border-border px-2 py-1 font-mono text-[11px] text-foreground">
                        {step}
                      </span>
                      {i < project.howItWorks.pipeline!.length - 1 && (
                        <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" />
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Capabilities — DCB only */}
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

          {/* Modes — DCB only */}
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

          {/* Tech stack */}
          <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
            <h2 className="font-mono text-xs text-muted-foreground">{t("about.skills.build")}</h2>
            <div className="flex flex-wrap gap-1.5">
              {project.techBadges.map((badge) => (
                <span key={badge} className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
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
