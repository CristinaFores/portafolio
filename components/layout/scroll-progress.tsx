"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

/** Thin accent bar tracking scroll depth across the page. */
export function ScrollProgress() {
  const reduced = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (reduced) return null

  return (
    <div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-px bg-border/30"
      aria-hidden
    >
      <motion.div
        className="h-full origin-left bg-accent"
        style={{ scaleX: progress }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  )
}
