"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"
import { PROFILE } from "@/lib/site-config"
import { TextLink } from "@/components/ui/text-link"

/**
 * Global footer with copyright and social/contact links.
 */
export function Footer() {
  const { t } = useLocale()
  const { fadeUp } = useMotion()

  return (
    <motion.footer {...fadeUp()} className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-between gap-4 px-6 py-5">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name} · {t("footer.tagline")}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs">
          <TextLink
            href={`mailto:${PROFILE.email}`}
            className="text-muted-foreground hover:text-accent"
          >
            Email
          </TextLink>
          <TextLink href={PROFILE.linkedInUrl} className="text-muted-foreground hover:text-accent">
            LinkedIn
          </TextLink>
          <TextLink href={PROFILE.gitHubUrl} className="text-muted-foreground hover:text-accent">
            GitHub
          </TextLink>
        </div>
      </div>
    </motion.footer>
  )
}
