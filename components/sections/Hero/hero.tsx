"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useRef } from "react"

import { ButtonLink } from "@/components/ui/ButtonLink/button-link"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { useParallaxY } from "@/hooks/use-parallax-y/use-parallax-y"
import { Link } from "@/i18n/navigation"
import { ROUTES } from "@/lib/routes"
import { PROFILE } from "@/lib/site-config"

/**
 * Hero — copy on the left, portrait on the right (desktop only).
 * Mobile: typography-first + subtle corner portrait peek.
 */
export function Hero() {
  const t = useTranslations()
  const { reduced } = useMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const { y: portraitY, enabled: parallaxOn } = useParallaxY(sectionRef, {
    range: 44,
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -28])

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", ROUTES.homeProjects)
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  const scrollToConnect = (e: React.MouseEvent) => {
    e.preventDefault()
    document
      .getElementById("connect")
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", ROUTES.homeConnect)
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pb-14 pt-28 md:pb-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <motion.div
          className="flex flex-col gap-6 md:gap-8"
          style={parallaxOn ? { y: copyY } : undefined}
        >
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span
                className="size-[6px] shrink-0 rounded-full bg-accent animate-pulse-dot"
                aria-hidden
              />
              {t("hero.meta")}
            </p>
            <div className="relative">
              {/* Portrait floats into the top-right; headline wraps beside it, then flows full width below */}
              <div
                className="hero-portrait-fade pointer-events-none absolute top-0 right-0 h-36 w-24 opacity-[0.22] contrast-75 saturate-75 sm:h-52 sm:w-40 lg:hidden"
                aria-hidden
              >
                <Image
                  src="/cristina-portrait.webp"
                  alt=""
                  width={760}
                  height={760}
                  sizes="160px"
                  className="h-full w-full object-contain object-top"
                />
              </div>
              <h1 className="hero-headline font-bold leading-[1.05] tracking-[-0.03em] text-foreground max-lg:text-[clamp(2rem,8.5vw,2.875rem)] lg:pr-0 lg:text-[clamp(2.5rem,6vw,4rem)]">
                {t("hero.headline1")} <br />
                <span className="text-accent">{t("hero.headline2")}</span>
              </h1>
            </div>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ButtonLink
              variant="primary"
              href={ROUTES.homeProjects}
              onClick={scrollToProjects}
            >
              {t("hero.viewWork")}
            </ButtonLink>
            <ButtonLink
              variant="outline"
              href={ROUTES.homeConnect}
              onClick={scrollToConnect}
            >
              {t("contact.title")}
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="hidden justify-end lg:flex"
          style={parallaxOn ? { y: portraitY } : undefined}
        >
          <Image
            src="/cristina-portrait.webp"
            alt={PROFILE.name}
            width={760}
            height={760}
            priority
            className="h-auto w-full max-w-sm opacity-80 contrast-75 transition-transform duration-500 hover:scale-[1.02] dark:invert"
          />
        </motion.div>
      </div>

      {!reduced && (
        <Link
          href={ROUTES.homeProjects}
          onClick={scrollToProjects}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] text-muted-foreground/50 transition-colors hover:text-muted-foreground md:flex"
          aria-label={t("hero.viewWork")}
        >
          <ChevronDown className="h-4 w-4 animate-bounce-subtle" aria-hidden />
        </Link>
      )}
    </section>
  )
}
