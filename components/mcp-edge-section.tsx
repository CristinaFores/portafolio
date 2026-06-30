"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { SectionHeading } from "@/components/section-heading"
import { ParallaxBlock } from "@/components/parallax-block"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"

/**
 * Home teaser for the Lab. Full explanation lives on /lab.
 */
export function McpEdgeSection() {
  const { t } = useLocale()
  const { fadeUp } = useMotion()

  return (
    <section className="home-section">
      <ParallaxBlock className="mx-auto w-full max-w-5xl" range={20}>
        <div className="flex flex-col gap-8 max-lg:gap-6">
          <SectionHeading
            index={t("mcp.sectionIndex")}
            title={t("mcp.headline")}
            subtitle={t("mcp.subhead")}
          />

          <motion.div {...fadeUp({ delay: 0.08 })}>
            <HeroMcpVisual className="h-auto w-full" />
          </motion.div>

          <motion.div {...fadeUp({ delay: 0.12 })}>
            <Link
              href="/lab"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent link-underline"
            >
              {t("mcp.viewLab")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </ParallaxBlock>
    </section>
  )
}
