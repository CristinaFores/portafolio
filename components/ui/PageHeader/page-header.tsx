"use client"

import { motion } from "framer-motion"
import { useMotion } from "@/hooks/use-motion/use-motion"

type PageHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
}

/**
 * Page-level header for top-level routes (Lab, Projects, About).
 * One consistent treatment so page titles never drift: uppercase mono
 * eyebrow, a heading-lg display title (larger than SectionHeading's
 * heading-md, which stays for in-page section headers), optional subtitle.
 * Renders the page's single <h1>.
 */
export function PageHeader({ eyebrow, title, subtitle, className = "" }: PageHeaderProps) {
  const { fadeUp } = useMotion()

  return (
    <header className={`flex flex-col gap-3 ${className}`}>
      <motion.p
        {...fadeUp({ y: 8, duration: 0.32 })}
        className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        {...fadeUp({ y: 10, duration: 0.35, delay: 0.04 })}
        className="text-heading-lg font-display text-balance font-semibold leading-[1.12] tracking-[-0.02em] text-foreground"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          {...fadeUp({ y: 8, duration: 0.35, delay: 0.08 })}
          className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </header>
  )
}
