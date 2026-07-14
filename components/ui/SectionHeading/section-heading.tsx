"use client"

import { motion } from "framer-motion"

import { useMotion } from "@/hooks/use-motion/use-motion"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

/**
 * Editorial section header — index and title enter with split stagger.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className = "",
  headingLevel = "h2",
}: SectionHeadingProps) {
  const { fadeUp } = useMotion()

  const headingMotion = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,
  }

  const sizeHeading = {
    h1: "text-heading-lg",
    h2: "text-heading-md",
    h3: "text-heading-sm",
    h4: "text-heading-sm",
    h5: "text-heading-sm",
    h6: "text-heading-sm",
  }

  const Heading = headingMotion[headingLevel] || motion.h2
  const headingSize = sizeHeading[headingLevel] || "text-heading-md"

  const subtitleSize = {
    h1: "text-base sm:text-lg",
    h2: "text-base sm:text-lg",
    h3: "text-base sm:text-lg",
    h4: "text-base sm:text-lg",
    h5: "text-base sm:text-lg",
    h6: "text-base sm:text-lg",
  }

  const subtitleClass = subtitleSize[headingLevel] || "text-base sm:text-lg"

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.p
        {...fadeUp({ y: 8, duration: 0.32 })}
        className={`font-mono text-xs uppercase tracking-[0.08em] text-accent font-medium`}
      >
        {eyebrow}
      </motion.p>
      <Heading
        {...fadeUp({ y: 10, duration: 0.35, delay: 0.04 })}
        className={`${headingSize} font-display text-balance font-semibold leading-[1.12] tracking-[-0.02em]
        text-foreground`}
      >
        {title}
      </Heading>
      {subtitle && (
        <motion.p
          {...fadeUp({ y: 8, duration: 0.35, delay: 0.08 })}
          className={` max-w-2xl text-pretty leading-relaxed ${subtitleClass} text-muted-foreground`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
