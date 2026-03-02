"use client"

import { EmailIcon, LinkedInIcon } from "@/components/icons"
import { useLocale } from "@/lib/locale-context"
import { PROFILE } from "@/lib/site-config"

/**
 * Global footer with copyright and social/contact links.
 */
export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-between gap-4 px-6 py-5">
        <p className="font-mono text-xs text-muted-foreground/40">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={t("nav.email")}
          >
            <EmailIcon className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-md border border-border p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={t("nav.linkedIn")}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
