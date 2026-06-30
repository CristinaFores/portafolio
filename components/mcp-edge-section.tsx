"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

const CAP_KEYS = ["mcp.cap1", "mcp.cap2", "mcp.cap3"] as const

/**
 * MCP tooling section — short and scannable.
 */
export function McpEdgeSection() {
  const { t } = useLocale()

  return (
    <section id="lab" className="border-t border-border bg-muted/30 px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div {...fadeUp}>
          <SectionHeading
            index={t("mcp.sectionIndex")}
            title={t("mcp.headline")}
            subtitle={t("mcp.subhead")}
          />
        </motion.div>

        <motion.div {...fadeUp}>
          <HeroMcpVisual className="h-auto w-full" />
        </motion.div>

        <motion.p {...fadeUp} className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {t("mcp.explainer")}
        </motion.p>

        <motion.ul {...fadeUp} className="flex max-w-2xl flex-col gap-1.5">
          {CAP_KEYS.map((key) => (
            <li
              key={key}
              className="flex gap-3 font-mono text-xs leading-relaxed text-muted-foreground"
            >
              <span className="text-muted-foreground/40" aria-hidden>
                —
              </span>
              {t(key)}
            </li>
          ))}
        </motion.ul>

        <motion.div {...fadeUp}>
          <a
            href={PROFILE.designContextBridgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            {t("mcp.cta")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
