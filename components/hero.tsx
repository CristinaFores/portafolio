"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { HeroMcpVisual } from "@/components/hero-mcp-visual"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"

/**
 * Hero — copy on the left, explained visual on the right.
 */
export function Hero() {
  const { t } = useLocale()

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    history.replaceState(null, "", "/#projects")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  const scrollToMcp = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("mcp-edge")?.scrollIntoView({ behavior: "smooth" })
    history.replaceState(null, "", "/#mcp-edge")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  const scrollToConnect = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
    history.replaceState(null, "", "/#connect")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <section className="flex min-h-[88vh] flex-col justify-center px-6 pb-20 pt-28">
      <div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <motion.p
              className="font-mono text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {t("hero.label")}
            </motion.p>
            <motion.h1
              className="text-balance font-semibold leading-[1.15] tracking-[-0.02em] text-foreground"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
            >
              {t("hero.headline")}
            </motion.h1>
            <motion.p
              className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.p
              className="text-sm text-muted-foreground/75"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            >
              {t("hero.meta")}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
          >
            <Link
              href="/#projects"
              onClick={scrollToProjects}
              className="inline-flex h-10 items-center rounded bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.viewWork")}
            </Link>
            <Link
              href="/#connect"
              onClick={scrollToConnect}
              className="inline-flex h-10 items-center rounded border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("contact.title")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
        >
          <Link
            href="/#mcp-edge"
            onClick={scrollToMcp}
            aria-label={t("hero.visualLink")}
            className="group flex flex-col gap-4"
          >
            <HeroMcpVisual className="h-auto w-full transition-transform duration-300 group-hover:-translate-y-0.5" />
            <figcaption className="flex flex-col gap-1.5 border-l-2 border-border pl-4">
              <p className="font-mono text-xs text-muted-foreground">{t("hero.visualLabel")}</p>
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
                {t("hero.visualCaption")}
              </p>
            </figcaption>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
