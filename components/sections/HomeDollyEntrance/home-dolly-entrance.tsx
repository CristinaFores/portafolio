"use client"

import { useRef, type ReactNode } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion"

type HomeDollyEntranceProps = {
  hero: ReactNode
  next: ReactNode
}

/**
 * Scroll-driven "dolly zoom" entrance for the home page. A tall scroll track
 * pins the viewport; as the user scrolls, the hero grows toward the viewer
 * and dissolves (as if walking through it) while the next section arrives
 * from depth — small and blurred to sharp and full size. Falls back to the
 * normal document flow when the user prefers reduced motion.
 */
export function HomeDollyEntrance({ hero, next }: HomeDollyEntranceProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  })

  // Hero: grows toward the viewer and dissolves.
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.5])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])
  const heroBlur = useTransform(scrollYProgress, [0, 0.4], [0, 8])
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`
  const heroPointerEvents = useTransform(heroOpacity, (o) => (o < 0.1 ? "none" : "auto"))

  // Next section: arrives from depth, then holds fully sharp and pinned for
  // the rest of the track so it gets real dwell time before scrolling on.
  const nextScale = useTransform(scrollYProgress, [0.25, 0.6], [0.85, 1])
  const nextOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1])
  const nextBlur = useTransform(scrollYProgress, [0.25, 0.55], [6, 0])
  const nextFilter = useMotionTemplate`blur(${nextBlur}px)`
  const nextPointerEvents = useTransform(nextOpacity, (o) => (o < 0.5 ? "none" : "auto"))

  if (reduced) {
    return (
      <>
        {hero}
        {next}
      </>
    )
  }

  return (
    <div ref={trackRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
            filter: heroFilter,
            pointerEvents: heroPointerEvents,
          }}
          className="absolute inset-0"
        >
          {hero}
        </motion.div>

        <motion.div
          style={{
            scale: nextScale,
            opacity: nextOpacity,
            filter: nextFilter,
            pointerEvents: nextPointerEvents,
          }}
          className="absolute inset-0"
        >
          {next}
        </motion.div>
      </div>
    </div>
  )
}
