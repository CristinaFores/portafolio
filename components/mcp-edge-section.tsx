"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"

/**
 * Home teaser for the Lab. Full explanation, capabilities and "how it
 * works" breakdown live on the dedicated /lab page.
 */
export function McpEdgeSection() {
  const { t } = useLocale()

  return (
    <section className="border-t border-border bg-muted/30 px-6 py-20">
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

        <motion.div {...fadeUp}>
          <Link
            href="/lab"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline"
          >
            {t("mcp.viewLab")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
