"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

import { useParallaxY } from "@/hooks/use-parallax-y/use-parallax-y"
import { cn } from "@/lib/class-names"

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

  // `relative` so useScroll can measure this element's offset correctly.
  return (
    <div ref={ref} className={cn("relative", className)}>
      <motion.div style={enabled ? { y } : undefined}>{children}</motion.div>
    </div>
  )
}
