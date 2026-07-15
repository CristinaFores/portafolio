"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLocale, useTranslations, type Locale } from "next-intl"
import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import { createPortal } from "react-dom"

import { useMotion } from "@/hooks/use-motion/use-motion"
import { Link, usePathname, useRouter } from "@/i18n/navigation"
import { cn } from "@/lib/class-names"
import { EASE } from "@/lib/motion"
import { ROUTES } from "@/lib/routes"
import { PROFILE } from "@/lib/site-config"

function isActive(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

const navLinks = [
  { href: ROUTES.home, labelKey: "nav.home" as const },
  { href: ROUTES.about, labelKey: "nav.about" as const },
  { href: ROUTES.lab, labelKey: "nav.lab" as const },
  { href: ROUTES.projects, labelKey: "nav.work" as const },
]

type NavControlsProps = {
  locale: Locale
  setLocale: (locale: Locale) => void
  onClose?: () => void
}

function NavControls({ locale, setLocale, onClose }: NavControlsProps) {
  return (
    <div className="flex h-8 overflow-hidden border border-border">
      <button
        type="button"
        onClick={() => {
          setLocale("es")
          onClose?.()
        }}
        className={cn(
          "flex h-full min-h-8 flex-1 items-center justify-center px-2.5 text-xs font-medium transition-colors",
          locale === "es"
            ? "bg-primary text-primary-foreground"
            : "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => {
          setLocale("en")
          onClose?.()
        }}
        className={cn(
          "flex h-full min-h-8 flex-1 items-center justify-center border-l border-border px-2.5 text-xs font-medium transition-colors",
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "bg-transparent text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        EN
      </button>
    </div>
  )
}

type NavLinkProps = {
  href: string
  label: string
  active: boolean
  onClick?: () => void
  layoutId?: string
  size?: "sm" | "lg"
}

function NavLinkItem({
  href,
  label,
  active,
  onClick,
  layoutId = "nav-underline",
  size = "sm",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-block w-fit py-1 transition-colors",
        size === "lg" ? "text-3xl font-semibold tracking-tight" : "text-sm",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {active && (
        <motion.span
          layoutId={layoutId}
          className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
          transition={{ duration: 0.25, ease: EASE }}
        />
      )}
    </Link>
  )
}

/**
 * Sticky top navigation with locale/theme controls.
 */
export function Navbar() {
  const pathname = usePathname()
  const { reduced } = useMotion()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const setLocale = (next: Locale) => {
    router.replace(pathname, { locale: next })
  }
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)

      if (reduced || y < 20) {
        setVisible(true)
      } else if (y > lastScrollY.current && y > 80) {
        setVisible(false)
      } else if (y < lastScrollY.current) {
        setVisible(true)
      }
      lastScrollY.current = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [reduced])

  const headerRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mobileOpen) return
    const handler = (e: PointerEvent) => {
      const target = e.target as Node
      const insideHeader = headerRef.current?.contains(target)
      const insideOverlay = overlayRef.current?.contains(target)
      if (!insideHeader && !insideOverlay) {
        setMobileOpen(false)
      }
    }
    document.addEventListener("pointerdown", handler)
    return () => document.removeEventListener("pointerdown", handler)
  }, [mobileOpen])

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  // Close the mobile menu when resizing up to the desktop breakpoint.
  useEffect(() => {
    if (!mobileOpen) return
    const mq = window.matchMedia("(min-width: 768px)")
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [mobileOpen])

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: reduced ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-border backdrop-blur-md transition-colors duration-300",
        scrolled ? "bg-background/90" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-[0px] py-4">
        <Link href={ROUTES.home} className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-[#f5f1ea]">
            <Image
              src="/cristina-portrait.webp"
              alt={PROFILE.name}
              width={30}
              height={30}
              priority
              className="max-w-none object-contain object-[center_12%] transition-transform duration-300 group-hover:scale-105"
            />
          </span>
          <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
            <span className="text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
              {PROFILE.name}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/70 sm:inline">
              {t("nav.tagline")}
            </span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLinkItem
                href={link.href}
                label={t(link.labelKey)}
                active={isActive(link.href, pathname)}
              />
            </li>
          ))}
          <li className="flex items-center gap-2">
            <NavControls locale={locale} setLocale={setLocale} />
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
                mobileOpen && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-foreground transition-all duration-300",
                mobileOpen && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </div>
        </button>
      </nav>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                ref={overlayRef}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="fixed inset-0 z-40 h-[100dvh] bg-background md:hidden"
              >
                <ul className="mx-auto flex h-full max-w-5xl flex-col gap-7 px-6 pb-16 pt-28">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <NavLinkItem
                        href={link.href}
                        label={t(link.labelKey)}
                        active={isActive(link.href, pathname)}
                        onClick={() => setMobileOpen(false)}
                        layoutId="nav-underline-mobile"
                        size="lg"
                      />
                    </li>
                  ))}
                  <li className="mt-auto flex flex-wrap items-center gap-2">
                    <NavControls
                      locale={locale}
                      setLocale={setLocale}
                      onClose={() => setMobileOpen(false)}
                    />
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </motion.header>
  )
}
