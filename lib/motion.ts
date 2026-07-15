/**
 * Shared Framer Motion animation constants and variant factories.
 * Always pass `reduced` from `useReducedMotion()` — never hardcode variants in components.
 */

import type { Transition } from "framer-motion"

export const EASE = [0.25, 0.46, 0.45, 0.94] as const

const VIEWPORT = { once: true, margin: "-50px" } as const

const STAGGER_CHILD = 0.05

const INSTANT: Transition = { duration: 0 }

type FadeOptions = {
  delay?: number
  y?: number
  duration?: number
  margin?: string
}

/** Fade + rise on viewport entry. */
export function fadeUpProps(reduced: boolean | null, opts: FadeOptions = {}) {
  const { delay = 0, y = 14, duration = 0.38, margin = VIEWPORT.margin } = opts
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: margin as "-50px" },
      transition: INSTANT,
    } as const
  }
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: margin as "-50px" },
    transition: { duration, delay, ease: EASE },
  } as const
}

/** Fade + rise on mount (hero). */
export function enterProps(reduced: boolean | null, opts: FadeOptions = {}) {
  const { delay = 0, y = 12, duration = 0.45 } = opts
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: INSTANT,
    } as const
  }
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  } as const
}

/** Staggered list item — use with whileInView. */
export function staggerItemProps(
  reduced: boolean | null,
  index: number,
  opts: { step?: number; y?: number } = {},
) {
  const { step = STAGGER_CHILD, y = 12 } = opts
  return fadeUpProps(reduced, { delay: index * step, y, duration: 0.35, margin: "-40px" })
}

/** Quick fade for inner page headers — no stagger, minimal movement. */
export function pageEnterProps(reduced: boolean | null, opts: FadeOptions = {}) {
  const { delay = 0, y = 4, duration = 0.2 } = opts
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      transition: INSTANT,
    } as const
  }
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE },
  } as const
}

