"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

import { useParallaxY } from "@/hooks/use-parallax-y/use-parallax-y"

type ParallaxBlockProps = {
  children: React.ReactNode
  className?: string
  /** Lower = slower layer. Default 24px range. */
  range?: number
}

/** Subtle scroll parallax wrapper for home sections (desktop only). */
export function ParallaxBlock({ children, className = "", range = 24 }: ParallaxBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { y, enabled } = useParallaxY(ref, { range })

  return (
    <div ref={ref} className={className}>
      <motion.div style={enabled ? { y } : undefined}>{children}</motion.div>
    </div>
  )
}
