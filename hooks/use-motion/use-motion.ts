"use client"

import { useReducedMotion } from "framer-motion"

import {
  enterProps,
  fadeUpProps,
  pageEnterProps,
  staggerItemProps,
} from "@/lib/motion"

/**
 * Central hook for motion props that respect prefers-reduced-motion.
 */
export function useMotion() {
  const reduced = useReducedMotion()

  return {
    reduced,
    fadeUp: fadeUpProps.bind(null, reduced),
    enter: enterProps.bind(null, reduced),
    pageEnter: pageEnterProps.bind(null, reduced),
    staggerItem: (index: number, opts?: { step?: number; y?: number }) =>
      staggerItemProps(reduced, index, opts),
  }
}
