"use client"

import { motion } from "framer-motion"
import { useMotion } from "@/hooks/use-motion/use-motion"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

/**
 * Editorial section header — index and title enter with split stagger.
 */
export function SectionHeading({
 eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  const { fadeUp } = useMotion()

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.p
        {...fadeUp({ y: 8, duration: 0.32 })}
        className={`font-mono text-xs uppercase tracking-[0.08em] text-accent font-medium`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        {...fadeUp({ y: 10, duration: 0.35, delay: 0.04 })}
        className={`text-heading-md font-display text-balance font-semibold leading-[1.12] tracking-[-0.02em]
        text-foreground`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...fadeUp({ y: 8, duration: 0.35, delay: 0.08 })}
          className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            "text-muted-foreground"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
