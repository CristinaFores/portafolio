"use client"

import { useEffect, useState } from "react"
import { useReducedMotion, useScroll, useTransform } from "framer-motion"
import type { RefObject } from "react"

type ParallaxOptions = {
  /** Max Y shift in px at scroll extremes. */
  range?: number
  /** Only enable from this breakpoint up. */
  minWidth?: number
}

/**
 * Scroll-linked Y offset for subtle parallax. Disabled on mobile and reduced motion.
 */
export function useParallaxY(
  target: RefObject<HTMLElement | null>,
  { range = 32, minWidth = 1024 }: ParallaxOptions = {},
) {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`)
    const update = () => setEnabled(!reduced && mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [minWidth, reduced])

  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  return { y, enabled }
}
