"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

/** Renders the headline with the "AI" keyword in the accent color. */
function Headline({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\bAI\b)/).map((part, i) =>
        part === "AI" ? (
          <span key={i} className="text-accent">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

/**
 * Hero — copy on the left, portrait on the right.
 */
export function Hero() {
  const { t } = useLocale()

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    history.replaceState(null, "", "/#projects")
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
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <motion.p
              className="flex items-center gap-2 font-mono text-xs text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="size-[6px] shrink-0 rounded-full bg-accent" aria-hidden />
              {t("hero.meta")}
            </motion.p>
            <motion.h1
              className="text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: EASE }}
            >
              <Headline text={t("hero.headline")} />
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
              className="font-mono text-xs text-muted-foreground/60"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            >
              {t("hero.label")}
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
              className="inline-flex h-10 items-center bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("hero.viewWork")}
            </Link>
            <Link
              href="/#connect"
              onClick={scrollToConnect}
              className="inline-flex h-10 items-center border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("contact.title")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="order-first lg:order-last"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
        >
          <Image
            src="/cristina-portrait.webp"
            alt={PROFILE.name}
            width={760}
            height={760}
            priority
            className="mx-auto h-auto w-full max-w-xs opacity-80 contrast-75 lg:max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}
