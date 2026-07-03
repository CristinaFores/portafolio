"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useMotionTemplate, useReducedMotion } from "framer-motion"

type CardConfig = {
  label: string
  /** [start, end] of the shared scroll progress this card animates through. */
  range: [number, number]
}

const CARDS: CardConfig[] = [
  { label: "01", range: [0, 0.4] },
  { label: "02", range: [0.3, 0.7] },
  { label: "03", range: [0.6, 1] },
]

function DollyCard({ label, range, progress }: CardConfig & { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const z = useTransform(progress, range, [-1600, 0])
  const opacity = useTransform(progress, range, [0.15, 1])
  const scale = useTransform(progress, range, [0.6, 1])
  const blurPx = useTransform(progress, range, [10, 0])
  const filter = useMotionTemplate`blur(${blurPx}px)`

  return (
    <motion.div
      style={{ z, opacity, scale, filter, x: "-50%", y: "-50%" }}
      className="absolute left-1/2 top-1/2 flex h-40 w-72 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card shadow-lg"
    >
      <span className="font-mono text-xs text-muted-foreground">Tarjeta</span>
      <span className="text-3xl font-semibold text-foreground">{label}</span>
    </motion.div>
  )
}

/**
 * Minimal prototype: scroll-driven 3D "dolly zoom" tunnel. The wrapper is a
 * tall (300vh) scroll track; a sticky viewport pins the 3D scene while the
 * user scrolls through it, and each card travels from far/blurred to
 * front/sharp across its own slice of that scroll range.
 */
export function ScrollDollyTunnel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  if (reduced) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-6 bg-background">
        {CARDS.map((card) => (
          <div
            key={card.label}
            className="flex h-40 w-72 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card shadow-lg"
          >
            <span className="font-mono text-xs text-muted-foreground">Tarjeta</span>
            <span className="text-3xl font-semibold text-foreground">{card.label}</span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-background [perspective:1200px]">
        {CARDS.map((card) => (
          <DollyCard key={card.label} {...card} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  )
}
