"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { SectionHeading } from "@/components/section-heading"
import { ParallaxBlock } from "@/components/parallax-block"
import { getLabProject } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"

const auralang = getLabProject("auralang")!

/**
 * Home teaser for the Lab. Full explanation lives on /lab.
 * design-context-bridge is the flagship spotlight; AuraLang gets a
 * compact secondary card so it isn't only visible in the thin Now strip.
 */
export function McpEdgeSection() {
  const { t, locale } = useLocale()
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

          <motion.div {...fadeUp({ delay: 0.16 })}>
            <Link
              href="/lab/auralang"
              className="group flex items-center gap-4 border-t border-border/50 pt-6 transition-colors hover:border-foreground/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={auralang.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-0.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {t("lab.alsoBuilding")}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {auralang.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    — {t("lab.auralang.description")}
                  </span>
                </p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/50 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </ParallaxBlock>
    </section>
  )
}
