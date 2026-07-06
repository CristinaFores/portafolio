import { useState, useCallback } from "react"

export function useCarousel(imagesLength: number) {
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
    setCurrent((prev) => (prev + 1) % imagesLength)
  }, [imagesLength])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + imagesLength) % imagesLength)
  }, [imagesLength])

  return { current, direction, goTo, goNext, goPrev }
}
