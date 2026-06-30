"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"
import { PROFILE } from "@/lib/site-config"

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
          <a href={`mailto:${PROFILE.email}`} className="link-underline text-muted-foreground hover:text-accent">
            Email
          </a>
          <a
            href={PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted-foreground hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-muted-foreground hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
