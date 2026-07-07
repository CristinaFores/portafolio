"use client"

import { motion } from "framer-motion"
import { useMotion } from "@/hooks/use-motion/use-motion"

export type SectionRowProps = {
  label: string
  children: React.ReactNode
  sectionIndex?: number
}

/**
 * Fila de sección con etiqueta lateral en monoespaciada y contenido a la derecha.
 * Anima su entrada con un fade-up escalonado según `sectionIndex`.
 */
export function SectionRow({ label, children, sectionIndex = 0 }: SectionRowProps) {
  const { fadeUp } = useMotion()
  return (
    <motion.section
      {...fadeUp({ delay: sectionIndex * 0.04, y: 16 })}
      className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr]"
    >
      <h2 className="font-mono text-xs text-muted-foreground">{label}</h2>
      <div>{children}</div>
    </motion.section>
  )
}
