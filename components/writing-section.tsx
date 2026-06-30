"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"

const ARTICLES = [
  { titleKey: "writing.article1.title", thesisKey: "writing.article1.thesis" },
  { titleKey: "writing.article2.title", thesisKey: "writing.article2.thesis" },
  { titleKey: "writing.article3.title", thesisKey: "writing.article3.thesis" },
] as const

/**
 * Thought leadership section with featured article titles.
 */
export function WritingSection() {
  const { t } = useLocale()

  return (
    <section id="writing" className="border-t border-border px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.div {...fadeUp}>
          <SectionHeading
            index={t("writing.sectionIndex")}
            title={t("writing.headline")}
            subtitle={t("writing.intro")}
          />
        </motion.div>

        <ul className="flex flex-col divide-y divide-border">
          {ARTICLES.map((article, i) => (
            <motion.li
              key={article.titleKey}
              {...fadeUp}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col gap-2 py-8 first:pt-0 last:pb-0 sm:gap-3"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                {String(i + 1).padStart(2, "0")} · {t("writing.comingSoon")}
              </p>
              <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                {t(article.titleKey)}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t(article.thesisKey)}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
