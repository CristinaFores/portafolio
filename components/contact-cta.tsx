"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

/**
 * Contact section with direct email and LinkedIn call-to-action links.
 */
export function ContactCTA() {
  const { t } = useLocale()

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          {...fadeUp}
          className="flex flex-col items-center gap-8 text-center"
        >
          <h2
            className="text-balance font-semibold leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
          >
            {t("contact.title")}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("nav.linkedIn")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
