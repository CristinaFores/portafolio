import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useMotion } from "./use-motion"

describe("useMotion", () => {
  it("exposes motion factories bound to the reduced-motion preference", () => {
    // vitest.setup's matchMedia stub reports no query matches → reduced = false.
    const { result } = renderHook(() => useMotion())

    expect(result.current.reduced).toBe(false)
    expect(typeof result.current.fadeUp).toBe("function")

    // With motion allowed, fadeUp animates from an offset.
    expect(result.current.fadeUp().initial).toEqual({ opacity: 0, y: 14 })
  })

  it("delays staggered items by their index", () => {
    const { result } = renderHook(() => useMotion())

    expect(result.current.staggerItem(2, { step: 0.05 }).transition).toMatchObject({
      delay: 0.1,
    })
  })
})
