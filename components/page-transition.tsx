"use client"

import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useMotion } from "@/hooks/use-motion"

type PageTransitionProps = {
  children: React.ReactNode
}

/** Subtle fade/slide when navigating between routes. */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const { reduced, pageTransition } = useMotion()

  if (reduced) return <>{children}</>

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} {...pageTransition()}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
