"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

/**
 * Hero section of the portfolio landing page.
 */
export function Hero() {
  const { t } = useLocale()

  return (
    <section className="relative flex min-h-[100vh] flex-col justify-center px-6 pb-16 pt-28">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-7">
          <motion.p
            className="font-mono text-xs tracking-[0.2em] text-muted-foreground/70 uppercase"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {t("hero.role")}
          </motion.p>
          <motion.h1
            className="text-balance font-semibold leading-[1.06] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.6rem, 7.5vw, 5.5rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          >
            {PROFILE.name}
          </motion.h1>
          <motion.p
            className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
          >
            {t("hero.subtitle")}
          </motion.p>
          <motion.p
            className="text-sm text-muted-foreground/55"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
          >
            {t("hero.location")}
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          >
            <Link
              href="/#projects"
              className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              {t("hero.viewWork")}
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("hero.aboutMe")}
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="/#projects"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          history.replaceState(null, "", "/#projects")
          window.dispatchEvent(new HashChangeEvent("hashchange"))
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full p-2 text-muted-foreground/35 transition-colors hover:bg-secondary/50 hover:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: EASE }}
        aria-label={t("nav.work")}
      >
        <ChevronDown className="h-4 w-4 animate-bounce-subtle" />
      </motion.a>
    </section>
  )
}
