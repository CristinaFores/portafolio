"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, Blocks, ArrowRight } from "lucide-react"
import { LAB_PROJECT } from "@/lib/data/lab-project"
import { TerminalSnippet } from "@/components/terminal-snippet"
import { useLocale } from "@/lib/locale-context"
import { PROFILE } from "@/lib/site-config"

const STEP_KEYS = ["lab.howItWorks.step1", "lab.howItWorks.step2", "lab.howItWorks.step3"] as const

const AURALANG_PIPELINE = ["Tab audio", "Whisper (local)", "Google Translate", "Web Speech API"]

/**
 * Lab index — list of in-progress projects with their details.
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
            <h1
              className="font-semibold leading-tight tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Lab
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {t("lab.pageSubtitle")}
            </p>
          </div>
        </header>

        <div className="flex flex-col">

          {/* design-context-bridge */}
          <article className="flex flex-col gap-8 border-t border-border py-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-secondary">
                <Blocks className="h-5 w-5 text-accent" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-foreground">design-context-bridge</h2>
                  <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {t("lab.status")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("mcp.subhead")}
                </p>
              </div>
            </div>

            <TerminalSnippet
              command={LAB_PROJECT.installCommand}
              output={[
                "✓ MCP server ready",
                `✓ ${LAB_PROJECT.supportedClients.length} compatible clients detected`,
                "→ listening on stdio",
              ]}
            />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs text-muted-foreground">{t("lab.modes.title")}</p>
                <div className="flex flex-col gap-3">
                  {LAB_PROJECT.modes.map((mode) => (
                    <div key={mode.name.en} className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-foreground">{mode.name[locale]}</span>
                      <span className="font-mono text-[11px] text-muted-foreground/60">{mode.status[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs text-muted-foreground">{t("lab.howItWorks.title")}</p>
                <ol className="flex flex-col gap-2">
                  {STEP_KEYS.map((key, i) => (
                    <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="shrink-0 font-mono text-[11px] text-muted-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {t(key)}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs text-muted-foreground">{t("lab.capabilities.title")}</p>
              <div className="flex flex-col gap-2">
                {LAB_PROJECT.toolGroups.map((group) => (
                  <div key={group.label.en} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                    <span className="shrink-0 text-sm font-medium text-foreground sm:w-48">{group.label[locale]}</span>
                    <span className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {group.tools.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {LAB_PROJECT.techBadges.map((badge) => (
                  <span key={badge} className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {badge}
                  </span>
                ))}
                {LAB_PROJECT.supportedClients.map((client) => (
                  <span key={client} className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {client}
                  </span>
                ))}
              </div>
              <a
                href={PROFILE.designContextBridgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                {t("mcp.cta")}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

          {/* AuraLang */}
          <article className="flex flex-col gap-8 border-t border-border py-10">
            <div className="flex items-start gap-4">
              <Image
                src="/images/auralang/logo-app.webp"
                alt="AuraLang"
                width={48}
                height={48}
                className="shrink-0 rounded-xl"
              />
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-base font-semibold text-foreground">AuraLang</h2>
                  <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {t("lab.status")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("lab.auralang.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs text-muted-foreground">{t("lab.howItWorks.title")}</p>
              <div className="flex flex-wrap items-center gap-2">
                {AURALANG_PIPELINE.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="border border-border px-2 py-1 font-mono text-[11px] text-foreground">
                      {step}
                    </span>
                    {i < AURALANG_PIPELINE.length - 1 && (
                      <ArrowRight className="h-3 w-3 shrink-0 text-muted-foreground/40" />
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-1.5">
                {["Chrome MV3", "React 18", "TypeScript", "Whisper", "Vite", "Tailwind CSS"].map((badge) => (
                  <span key={badge} className="border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {badge}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/CristinaFores/auralang"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </article>

        </div>

        <p className="font-mono text-[11px] text-muted-foreground/55">{t("lab.disclaimer")}</p>
      </div>
    </div>
  )
}
