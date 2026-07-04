"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"
import { PROFILE } from "@/lib/site-config"
import { ButtonLink } from "@/components/ui/button-link"
import { TextLink } from "@/components/ui/text-link"

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
            <h2 className="text-heading-sm text-balance font-semibold leading-[1.15] tracking-[-0.02em] text-foreground">
              {t("contact.headline")}
            </h2>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              {t("contact.subline")}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto">
            <ButtonLink
              variant="primary"
              href={`mailto:${PROFILE.email}`}
              className="justify-center"
            >
              {PROFILE.email}
            </ButtonLink>
            <div className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
              <TextLink href={PROFILE.linkedInUrl} className="hover:text-foreground">
                {t("nav.linkedIn")}
              </TextLink>
              <span className="text-muted-foreground/30">·</span>
              <TextLink href={PROFILE.gitHubUrl} className="hover:text-foreground">
                {t("nav.gitHub")}
              </TextLink>
              <span className="text-muted-foreground/30">·</span>
              <TextLink href={PROFILE.cvUrl} className="hover:text-foreground">
                {t("nav.cv")}
              </TextLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
