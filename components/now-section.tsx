"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { NOW_ROWS, NOW_UPDATED } from "@/lib/data/now"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"

/**
 * Live snapshot of current builds, between Hero and Lab.
 */
export function NowSection() {
  const { t, locale } = useLocale()
  const { fadeUp, staggerItem } = useMotion()

  return (
    <section className="home-section home-section-vcenter home-section-muted">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 max-lg:gap-6">
        <div className="flex items-baseline justify-between gap-4">
          <SectionHeading index={t("now.sectionIndex")} title={t("now.headline")} subtitle={t("now.subhead")} />
          <motion.span
            {...fadeUp({ delay: 0.1 })}
            className="hidden shrink-0 font-mono text-xs text-muted-foreground/50 sm:block"
          >
            {NOW_UPDATED[locale]}
          </motion.span>
        </div>

        <div className="flex flex-col">
          {NOW_ROWS.map((row, i) => (
            <motion.div
              key={row.title.en}
              {...staggerItem(i, { step: 0.05, y: 12 })}
              className="grid gap-2 border-t border-border/50 py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span
                  className="size-[6px] shrink-0 rounded-full bg-muted-foreground/40"
                  aria-hidden
                />
                {row.label[locale]}
              </div>
              <div className="flex flex-col gap-1.5">
                {row.href ? (
                  <Link
                    href={row.href}
                    className="group inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {row.title[locale]}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <h3 className="text-sm font-medium text-foreground">{row.title[locale]}</h3>
                )}
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {row.description[locale]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
