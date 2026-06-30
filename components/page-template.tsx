"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

type PageTemplateProps = {
  children: React.ReactNode
}

type Phase = "idle" | "cover" | "reveal"

/**
 * Curtain transition: fade to background → swap route → fade out + content rise.
 */
export function PageTemplate({ children }: PageTemplateProps) {
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const pending = useRef(children)

  const [displayPath, setDisplayPath] = useState(pathname)
  const [displayContent, setDisplayContent] = useState(children)
  const [phase, setPhase] = useState<Phase>("idle")

  pending.current = children

  useLayoutEffect(() => {
    if (pathname === displayPath) {
      setDisplayContent(children)
      return
    }
    setPhase("cover")
  }, [pathname, children, displayPath])

  const handleCoverComplete = () => {
    setDisplayPath(pathname)
    setDisplayContent(pending.current)
    window.scrollTo({ top: 0, behavior: "auto" })
    setPhase("reveal")
  }

  const handleRevealComplete = () => {
    setPhase("idle")
  }

  if (reduced) return children

  return (
    <div className="relative">
      <motion.div
        key={displayPath}
        initial={phase !== "idle" ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.48, ease: EASE, delay: phase === "reveal" ? 0.05 : 0 }}
        className="w-full bg-background"
      >
        {displayContent}
      </motion.div>

      {phase !== "idle" && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-40 bg-background"
          initial={false}
          animate={{ opacity: phase === "cover" ? 1 : 0 }}
          transition={{
            duration: phase === "cover" ? 0.22 : 0.42,
            ease: EASE,
          }}
          onAnimationComplete={() => {
            if (phase === "cover") handleCoverComplete()
            else if (phase === "reveal") handleRevealComplete()
          }}
        />
      )}
    </div>
  )
}
