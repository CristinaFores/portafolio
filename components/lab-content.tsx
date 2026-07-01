"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { LAB_PROJECT } from "@/lib/data/lab-project"
import { TerminalSnippet } from "@/components/terminal-snippet"
import { useLocale } from "@/lib/locale-context"
import { PROFILE } from "@/lib/site-config"

const STEP_KEYS = ["lab.howItWorks.step1", "lab.howItWorks.step2", "lab.howItWorks.step3"] as const

type SectionProps = {
  label: string
  children: React.ReactNode
}

function Section({ label, children }: SectionProps) {
  return (
    <section className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr]">
      <h2 className="font-mono text-xs text-muted-foreground">{label}</h2>
      <div>{children}</div>
    </section>
  )
}

/**
 * Dedicated page for the design-context-bridge MCP project.
 */
export function LabContent() {
  const { t, locale } = useLocale()

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-8">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {t("lab.backToHome")}
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>{t("lab.sectionIndex")}</span>
              <span className="border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent">
                {t("lab.status")}
              </span>
            </div>
            <h1
              className="font-semibold leading-tight tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {t("lab.title")}
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl">
              “{LAB_PROJECT.quote[locale]}”
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {LAB_PROJECT.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="border border-border px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </header>

        <TerminalSnippet
          command={LAB_PROJECT.installCommand}
          output={[
            "✓ MCP server ready",
            `✓ ${LAB_PROJECT.supportedClients.length} compatible clients detected`,
            "→ listening on stdio",
          ]}
        />

        <div className="flex flex-col">
          <Section label={t("lab.modes.title")}>
            <div className="grid max-w-2xl gap-5 sm:grid-cols-2">
              {LAB_PROJECT.modes.map((mode) => (
                <div key={mode.name.en} className="flex flex-col gap-1.5 border-t border-border/60 pt-3">
                  <h3 className="text-sm font-medium text-foreground">{mode.name[locale]}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{mode.description[locale]}</p>
                  <span className="font-mono text-[11px] text-muted-foreground/60">{mode.status[locale]}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section label={t("lab.capabilities.title")}>
            <div className="flex max-w-2xl flex-col gap-4">
              {LAB_PROJECT.toolGroups.map((group) => (
                <div key={group.label.en} className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-medium text-foreground">{group.label[locale]}</h3>
                  <p className="font-mono text-[12px] leading-relaxed text-muted-foreground">
                    {group.tools.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section label={t("lab.howItWorks.title")}>
            <ol className="flex max-w-2xl flex-col gap-4">
              {STEP_KEYS.map((key, i) => (
                <li key={key} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t(key)}
                </li>
              ))}
            </ol>
          </Section>

          <Section label={t("lab.clients.title")}>
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
              {LAB_PROJECT.supportedClients.join(" · ")}
            </p>
          </Section>

          <Section label={t("lab.security.title")}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {LAB_PROJECT.security[locale]}
            </p>
          </Section>

          <Section label={t("lab.about.title")}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("mcp.explainer")}
            </p>
          </Section>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-8">
          <a
            href={PROFILE.designContextBridgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex h-10 w-fit items-center gap-1.5 px-5 text-sm font-medium"
          >
            {t("mcp.cta")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="font-mono text-[11px] text-muted-foreground/55">{t("lab.disclaimer")}</p>
        </div>
      </div>
    </div>
  )
}
