"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/locale-context"
import { EASE } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

const navLinks = [
  { href: "/", labelKey: "nav.home" as const },
  { href: "/about", labelKey: "nav.about" as const },
  { href: "/lab", labelKey: "nav.lab" as const },
  { href: "/projects", labelKey: "nav.work" as const },
]

const ICON_BTN =
  "flex h-8 w-8 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"

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
      <button
        type="button"
        onClick={() => { toggleTheme(); onClose?.() }}
        className={ICON_BTN}
        aria-label={isDark ? t("nav.themeLight") : t("nav.themeDark")}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
      <div className="flex h-8 overflow-hidden border border-border">
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
 * Sticky top navigation with locale/theme controls. Social links live only
 * in the footer to avoid repeating the same contact CTAs in every section.
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
  const { setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale, t } = useLocale()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-border transition-all duration-300",
        scrolled ? "bg-background/90" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-[#f5f1ea]">
            <Image
              src="/cristina-portrait.webp"
              alt={PROFILE.name}
              width={30}
              height={30}
              priority
              className="max-w-none object-contain object-[center_12%]"
            />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
            {PROFILE.name}
          </span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  isActive(link.href, pathname)
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
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "text-sm transition-colors",
                      isActive(link.href, pathname)
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
