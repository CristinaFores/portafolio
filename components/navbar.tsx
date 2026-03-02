"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { EmailIcon, LinkedInIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

function isActive(href: string, pathname: string, hash: string): boolean {
  if (href.includes("#")) {
    const [hrefPath, hrefHash] = href.split("#")
    return pathname === hrefPath && hash === `#${hrefHash}`
  }
  if (href === "/") return pathname === "/" && hash === ""
  return pathname === href
}

const navLinks = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "/about", labelKey: "nav.about" as const },
  { href: "/#projects", labelKey: "nav.work" as const },
]

const ICON_BTN =
  "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"

const getCurrentHash = () => {
  if (typeof window === "undefined") return ""
  return new URL(window.document.URL).hash
}

const subscribeToHashChange = (callback: () => void) => {
  window.addEventListener("hashchange", callback)
  return () => window.removeEventListener("hashchange", callback)
}

type NavControlsProps = {
  locale: "es" | "en"
  setLocale: (locale: "es" | "en") => void
  mounted: boolean
  resolvedTheme: string | undefined
  toggleTheme: () => void
  t: (key: string) => string
  onClose?: () => void
}

function NavControls({
  locale,
  setLocale,
  mounted,
  resolvedTheme,
  toggleTheme,
  t,
  onClose,
}: NavControlsProps) {
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <>
      <a href={`mailto:${PROFILE.email}`} className={ICON_BTN} aria-label={t("nav.email")}>
        <EmailIcon className="h-4 w-4" />
      </a>
      <a
        href={PROFILE.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={ICON_BTN}
        aria-label={t("nav.linkedIn")}
      >
        <LinkedInIcon className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={() => { toggleTheme(); onClose?.() }}
        className={ICON_BTN}
        aria-label={isDark ? t("nav.themeLight") : t("nav.themeDark")}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <div className="flex h-8 overflow-hidden rounded-md border border-border">
        <button
          type="button"
          onClick={() => { setLocale("es"); onClose?.() }}
          className={cn(
            "flex h-full min-h-8 flex-1 items-center justify-center px-2.5 text-xs font-medium transition-colors",
            locale === "es"
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => { setLocale("en"); onClose?.() }}
          className={cn(
            "flex h-full min-h-8 flex-1 items-center justify-center border-l border-border px-2.5 text-xs font-medium transition-colors",
            locale === "en"
              ? "bg-primary text-primary-foreground"
              : "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          EN
        </button>
      </div>
    </>
  )
}

/**
 * Sticky top navigation with locale/theme controls and hash-aware active links.
 */
export function Navbar() {
  const pathname = usePathname()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const hash = useSyncExternalStore(subscribeToHashChange, getCurrentHash, () => "")
  const [pendingScrollHref, setPendingScrollHref] = useState<string | null>(null)
  const { setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") return

    const onScroll = () => {
      const el = document.getElementById("projects")
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const newHash = window.scrollY >= sectionTop ? "#projects" : ""
      const current = getCurrentHash()
      if (current !== newHash) {
        history.replaceState(null, "", pathname + newHash)
        window.dispatchEvent(new HashChangeEvent("hashchange"))
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [pathname])

  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener("pointerdown", handler)
    return () => document.removeEventListener("pointerdown", handler)
  }, [mobileOpen])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    if (href === "/#projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (mobileOpen || !pendingScrollHref) return

    const timeoutId = window.setTimeout(() => {
      scrollToSection(pendingScrollHref)
      setPendingScrollHref(null)
    }, 280)

    return () => window.clearTimeout(timeoutId)
  }, [mobileOpen, pendingScrollHref])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const isInPageSectionLink = pathname === "/" && (href === "/" || href === "/#projects")
    const menuWasOpen = mobileOpen

    setMobileOpen(false)
    if (!isInPageSectionLink) return

    e.preventDefault()

    if (menuWasOpen) {
      setPendingScrollHref(href)
      return
    }

    scrollToSection(href)
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-border transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="text-sm font-medium tracking-tight text-muted-foreground transition-colors hover:text-foreground"
        >
          {PROFILE.name}
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm transition-colors",
                  isActive(link.href, pathname, hash)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {t(link.labelKey)}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <NavControls
              locale={locale}
              setLocale={setLocale}
              mounted={mounted}
              resolvedTheme={resolvedTheme}
              toggleTheme={toggleTheme}
              t={t}
            />
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-8 w-8 items-center justify-center md:hidden"
          aria-label={t("nav.toggleMenu")}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                mobileOpen && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                mobileOpen && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-sm transition-colors",
                      isActive(link.href, pathname, hash)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
              <li className="flex flex-wrap items-center gap-2 pt-1">
                <NavControls
                  locale={locale}
                  setLocale={setLocale}
                  mounted={mounted}
                  resolvedTheme={resolvedTheme}
                  toggleTheme={toggleTheme}
                  t={t}
                  onClose={() => setMobileOpen(false)}
                />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
