"use client"

import { motion } from "framer-motion"
import { NOW_ROWS, NOW_UPDATED } from "@/lib/data/now"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"

/**
 * Live snapshot of current work and current build, between Hero and Lab.
 */
export function NowSection() {
  const { t, locale } = useLocale()

  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <motion.div {...fadeUp} className="flex items-baseline justify-between gap-4">
          <SectionHeading index={t("now.sectionIndex")} title={t("now.headline")} subtitle={t("now.subhead")} />
          <span className="hidden shrink-0 font-mono text-xs text-muted-foreground/50 sm:block">
            {NOW_UPDATED[locale]}
          </span>
        </motion.div>

        <div className="flex flex-col">
          {NOW_ROWS.map((row, i) => (
            <motion.div
              key={row.label.en}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="grid gap-2 border-t border-border/50 py-6 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span
                  className={`size-[6px] shrink-0 rounded-full ${
                    row.status === "active" ? "bg-accent" : "bg-muted-foreground/40"
                  }`}
                  aria-hidden
                />
                {row.label[locale]}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-medium text-foreground">{row.title[locale]}</h3>
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
