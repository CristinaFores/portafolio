import { motion } from "framer-motion"

import { useMotion } from "@/hooks/use-motion/use-motion"

interface AnimatedListProps {
  index: number
  children: React.ReactNode
}

export const AnimatedList = ({ index, children }: AnimatedListProps) => {
  const { staggerItem } = useMotion()
  return (
    <motion.article {...staggerItem(index, { step: 0.03, y: 12 })}>
      {children}
    </motion.article>
  )
}
