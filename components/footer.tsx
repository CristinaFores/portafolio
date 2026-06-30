"use client"

import { useLocale } from "@/lib/locale-context"
import { PROFILE } from "@/lib/site-config"

/**
 * Global footer with copyright and social/contact links.
 */
export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-row flex-wrap items-center justify-between gap-4 px-6 py-5">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name} · {t("footer.tagline")}
        </p>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Email
          </a>
          <a
            href={PROFILE.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
