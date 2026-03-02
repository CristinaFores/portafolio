"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ProjectImage } from "@/lib/data/projects"
import { IPhoneFrame, MacBookFrame, TerminalFrame, WireframeFrame } from "@/components/device-frame"
import { useLocale } from "@/lib/locale-context"

type DeviceImageProps = {
  image: ProjectImage
}

type ImageCarouselProps = {
  images: ProjectImage[]
}

function DeviceImage({ image }: DeviceImageProps) {
  const portraitClass = "[zoom:0.8] sm:[zoom:1]"

  if (image.type === "terminal") {
    return (
      <div className={portraitClass}>
        <TerminalFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "mobile") {
    return (
      <div className={portraitClass}>
        <IPhoneFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "wireframe") {
    return <WireframeFrame src={image.src} alt={image.alt} />
  }
  return <MacBookFrame src={image.src} alt={image.alt} />
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 180 : -180, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -180 : 180, opacity: 0 }),
}

/**
 * Animated carousel for project screenshots with fixed viewport behavior.
 */
export function ImageCarousel({ images }: ImageCarouselProps) {
  const { t } = useLocale()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1)
      setCurrent(index)
    },
    [current]
  )

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  if (images.length === 0) return null

  const currentImage = images[current]

  const viewportHeight =
    currentImage.type === "mobile" || currentImage.type === "terminal"
      ? "h-[720px]"
      : currentImage.type === "wireframe"
        ? "h-[540px]"
        : "h-[480px]"

  return (
    <div className="overflow-hidden rounded-xl bg-secondary/50">
      <div className={`relative flex ${viewportHeight} items-center justify-center overflow-hidden pt-[37px] pb-[21px] transition-[height] duration-300`}>
        <button
          onClick={goPrev}
          type="button"
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={t("project.prevImage")}
        >
          <ChevronLeft className="h-4 w-4 shrink-0" />
        </button>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 320, damping: 32 },
              opacity: { duration: 0.18 },
            }}
            className="flex min-w-0 w-full items-center justify-center px-8 sm:px-14"
          >
            <DeviceImage image={currentImage} />
          </motion.div>
        </AnimatePresence>
        <button
          onClick={goNext}
          type="button"
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background"
          aria-label={t("project.nextImage")}
        >
          <ChevronRight className="h-4 w-4 shrink-0" />
        </button>
      </div>
      <div className="flex items-center justify-center gap-3 py-4">
        <span className="font-mono text-xs tabular-nums text-muted-foreground/60">
          {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              type="button"
              aria-label={`${t("project.goToImage")} ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/45"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-border px-6 py-2.5">
        <p className="text-center text-xs text-muted-foreground/60">
          {currentImage.alt}
        </p>
      </div>
    </div>
  )
}
