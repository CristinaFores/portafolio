import { act, renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useCarousel } from "./use-carousel"

describe("useCarousel", () => {
  it("starts at the first slide with no direction", () => {
    const { result } = renderHook(() => useCarousel(4))

    expect(result.current.current).toBe(0)
    expect(result.current.direction).toBe(0)
  })

  it("advances and wraps around at the end", () => {
    const { result } = renderHook(() => useCarousel(3))

    act(() => result.current.goNext())
    expect(result.current.current).toBe(1)
    expect(result.current.direction).toBe(1)

    act(() => result.current.goNext())
    act(() => result.current.goNext())
    expect(result.current.current).toBe(0) // wrapped 2 -> 0
  })

  it("goes back and wraps around at the start", () => {
    const { result } = renderHook(() => useCarousel(3))

    act(() => result.current.goPrev())
    expect(result.current.current).toBe(2) // wrapped 0 -> 2
    expect(result.current.direction).toBe(-1)
  })

  it("jumps to an index and sets direction from the current position", () => {
    const { result } = renderHook(() => useCarousel(5))

    act(() => result.current.goTo(3))
    expect(result.current.current).toBe(3)
    expect(result.current.direction).toBe(1) // 3 > 0

    act(() => result.current.goTo(1))
    expect(result.current.current).toBe(1)
    expect(result.current.direction).toBe(-1) // 1 < 3
  })
})
