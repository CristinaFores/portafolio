"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { useMotion } from "@/hooks/use-motion"
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
  const { reduced } = useMotion()

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", "/#projects")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  const scrollToConnect = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("connect")?.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", "/#connect")
    window.dispatchEvent(new HashChangeEvent("hashchange"))
  }

  return (
    <section className="relative flex min-h-svh flex-col justify-center px-6 pb-16 pt-28">
      <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="size-[6px] shrink-0 rounded-full bg-accent animate-pulse-dot" aria-hidden />
              {t("hero.meta")}
            </p>
            <h1
              className="text-balance font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              <Headline text={t("hero.headline")} />
            </h1>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t("hero.subtitle")}
            </p>
            <p className="font-mono text-xs text-muted-foreground/60">{t("hero.label")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              onClick={scrollToProjects}
              className="btn-primary inline-flex h-10 items-center px-5 text-sm font-medium"
            >
              {t("hero.viewWork")}
            </Link>
            <Link
              href="/#connect"
              onClick={scrollToConnect}
              className="btn-outline inline-flex h-10 items-center px-5 text-sm font-medium"
            >
              {t("contact.title")}
            </Link>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <Image
            src="/cristina-portrait.webp"
            alt={PROFILE.name}
            width={760}
            height={760}
            priority
            className="mx-auto h-auto w-full max-w-xs opacity-80 contrast-75 transition-transform duration-500 hover:scale-[1.02] lg:max-w-sm dark:invert"
          />
        </div>
      </div>

      {!reduced && (
        <a
          href="/#projects"
          onClick={scrollToProjects}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] text-muted-foreground/50 transition-colors hover:text-muted-foreground"
          aria-label={t("hero.viewWork")}
        >
          <ChevronDown className="h-4 w-4 animate-bounce-subtle" aria-hidden />
        </a>
      )}
    </section>
  )
}
