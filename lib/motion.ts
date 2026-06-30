/**
 * Shared Framer Motion animation constants and variant factories.
 * Always pass `reduced` from `useReducedMotion()` — never hardcode variants in components.
 */

import type { Transition, Variants } from "framer-motion"

export const EASE = [0.25, 0.46, 0.45, 0.94] as const

export const VIEWPORT = { once: true, margin: "-50px" } as const

export const STAGGER_CHILD = 0.05
export const STAGGER_ROW = 0.03

const INSTANT: Transition = { duration: 0 }

type FadeOptions = {
  delay?: number
  y?: number
  duration?: number
  margin?: string
}

/** Fade + rise on viewport entry. */
export function fadeUpProps(reduced: boolean | null, opts: FadeOptions = {}) {
  const { delay = 0, y = 20, duration = 0.5, margin = VIEWPORT.margin } = opts
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

/** Fade + rise on mount (hero, page headers). */
export function enterProps(reduced: boolean | null, opts: FadeOptions = {}) {
  const { delay = 0, y = 16, duration = 0.6 } = opts
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
  return fadeUpProps(reduced, { delay: index * step, y, duration: 0.45, margin: "-40px" })
}

/** Page route transition wrapper props. */
export function pageTransitionProps(reduced: boolean | null) {
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
      transition: INSTANT,
    } as const
  }
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.28, ease: EASE },
  } as const
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER_CHILD } },
}

export const staggerContainerReduced: Variants = {
  hidden: {},
  visible: {},
}

/** @deprecated Use fadeUpProps(reduced) via useMotion() */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT,
  transition: { duration: 0.5, ease: EASE },
} as const
