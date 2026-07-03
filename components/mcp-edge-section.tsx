"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ParallaxBlock } from "@/components/parallax-block"
import { ViewAllLink } from "@/components/view-all-link"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"

/**
 * Home teaser for the Lab. Same row pattern as FeaturedProjects/ProjectCaseRow
 * so both list sections on the home page share one visual language.
 */
export function McpEdgeSection() {
  const { t, locale } = useLocale()
  const { staggerItem } = useMotion()

  return (
    <section className="home-section">
      <ParallaxBlock className="mx-auto w-full max-w-5xl" range={20}>
        <div className="flex flex-col gap-8 max-lg:gap-6">
          <SectionHeading
            index={t("mcp.sectionIndex")}
            title={t("mcp.headline")}
            subtitle={t("mcp.subhead")}
          />

          <div className="flex flex-col">
            {LAB_PROJECTS.map((project, i) => (
              <motion.article key={project.slug} {...staggerItem(i, { step: 0.03, y: 12 })}>
                <Link
                  href={`/lab/${project.slug}`}
                  className="group flex items-start gap-5 border-b border-border/50 py-8 transition-colors hover:border-border md:gap-6 md:py-10"
                >
                  <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-md md:block">
                    <Image
                      src={project.icon}
                      alt=""
                      width={96}
                      height={96}
                      className="h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-2.5">
                    <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                      {project.name}
                    </h3>

                    <p className="line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {project.tagline[locale]}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground/80">
                        {t(`lab.status.${project.status}`)}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="mt-1 hidden h-4 w-4 shrink-0 translate-x-0 text-muted-foreground/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-muted-foreground/60 md:block"
                    aria-hidden
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          <ViewAllLink href="/lab" label={t("mcp.viewLab")} />
        </div>
      </ParallaxBlock>
    </section>
  )
}
