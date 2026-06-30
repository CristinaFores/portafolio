"use client"

import { motion } from "framer-motion"
import { useMotion } from "@/hooks/use-motion"

type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
  className?: string
  inverse?: boolean
}

/**
 * Editorial section header — index and title enter with split stagger.
 */
export function SectionHeading({
  index,
  title,
  subtitle,
  className = "",
  inverse = false,
}: SectionHeadingProps) {
  const { fadeUp } = useMotion()

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.p
        {...fadeUp({ y: 10, duration: 0.45 })}
        className={`font-mono text-xs uppercase tracking-[0.08em] ${
          inverse ? "text-inverse-foreground/55" : "text-muted-foreground"
        }`}
      >
        {index}
      </motion.p>
      <motion.h2
        {...fadeUp({ y: 14, duration: 0.5, delay: 0.06 })}
        className={`font-display text-balance font-semibold leading-[1.12] tracking-[-0.02em] ${
          inverse ? "text-inverse-foreground" : "text-foreground"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...fadeUp({ y: 12, duration: 0.5, delay: 0.12 })}
          className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            inverse ? "text-inverse-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
