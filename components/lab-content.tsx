"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

const CAP_KEYS = ["mcp.cap1", "mcp.cap2", "mcp.cap3"] as const
const STEP_KEYS = ["lab.howItWorks.step1", "lab.howItWorks.step2", "lab.howItWorks.step3"] as const

type SectionProps = {
  label: string
  children: React.ReactNode
}

function Section({ label, children }: SectionProps) {
  return (
    <motion.section {...fadeUp} className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr]">
      <h2 className="font-mono text-xs text-muted-foreground">{label}</h2>
      <div>{children}</div>
    </motion.section>
  )
}

/**
 * Dedicated page for the design-context-bridge MCP project.
 */
export function LabContent() {
  const { t } = useLocale()

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {t("lab.backToHome")}
            </Link>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col gap-4">
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
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("mcp.subhead")}
            </p>
          </motion.div>
        </header>

        <motion.div {...fadeUp}>
          <HeroMcpVisual className="h-auto w-full" />
        </motion.div>

        <div className="flex flex-col">
          <Section label={t("lab.capabilities.title")}>
            <ul className="flex max-w-2xl flex-col gap-2">
              {CAP_KEYS.map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-[9px] block h-px w-3 shrink-0 bg-muted-foreground/50" />
                  {t(key)}
                </li>
              ))}
            </ul>
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

          <Section label={t("lab.about.title")}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("mcp.explainer")}
            </p>
          </Section>
        </div>

        <motion.div {...fadeUp} className="border-t border-border pt-8">
          <a
            href={PROFILE.designContextBridgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-10 items-center gap-1.5 bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("mcp.cta")}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
