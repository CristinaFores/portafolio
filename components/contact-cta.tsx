"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"
import { PROFILE } from "@/lib/site-config"

/**
 * Contact section with direct outreach links.
 */
export function ContactCTA() {
  const { t } = useLocale()
  const { fadeUp } = useMotion()

  return (
    <section id="connect" className="home-section home-section-vcenter">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="flex max-w-xl flex-col gap-4">
            <p className="font-mono text-xs text-muted-foreground">{t("contact.sectionIndex")}</p>
            <h2
              className="text-balance font-semibold leading-[1.15] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
            >
              {t("contact.headline")}
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {t("contact.subline")}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto">
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn-primary inline-flex h-10 items-center justify-center px-5 text-sm font-medium"
            >
              {PROFILE.email}
            </a>
            <div className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
              <a
                href={PROFILE.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground"
              >
                {t("nav.linkedIn")}
              </a>
              <span className="text-muted-foreground/30">·</span>
              <a
                href={PROFILE.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground"
              >
                {t("nav.gitHub")}
              </a>
              <span className="text-muted-foreground/30">·</span>
              <a
                href={PROFILE.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-foreground"
              >
                {t("nav.cv")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
