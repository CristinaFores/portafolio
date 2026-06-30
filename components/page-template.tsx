"use client"

import { useLayoutEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

type PageTemplateProps = {
  children: React.ReactNode
}

/**
 * Enter-only route fade. No exit overlay — the curtain transition could stick
 * in production when onAnimationComplete never fired, leaving a blank screen.
 */
export function PageTemplate({ children }: PageTemplateProps) {
  const pathname = usePathname()
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [pathname])

  if (reduced) {
    return <div className="w-full bg-background">{children}</div>
  }

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: EASE }}
      className="w-full bg-background"
    >
      {children}
    </motion.div>
  )
}
