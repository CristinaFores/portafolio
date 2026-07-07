import { renderHook } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

// Control framer-motion's reduced-motion boundary explicitly; keep the rest real.
const reduced = vi.hoisted(() => ({ value: false }))
vi.mock("framer-motion", async (importActual) => {
  const actual = await importActual<typeof import("framer-motion")>()
  return { ...actual, useReducedMotion: () => reduced.value }
})

import { useParallaxY } from "./use-parallax-y"

function desktopMatches(isDesktop: boolean) {
  vi.stubGlobal(
    "matchMedia",
    (query: string) =>
      ({
        matches: query.includes("min-width") ? isDesktop : false,
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  )
}

function ref() {
  return { current: document.createElement("div") }
}

describe("useParallaxY", () => {
  afterEach(() => {
    reduced.value = false
    vi.unstubAllGlobals()
  })

  it("stays disabled below the min-width breakpoint", () => {
    desktopMatches(false)
    const { result } = renderHook(() => useParallaxY(ref()))

    expect(result.current.enabled).toBe(false)
  })

  it("enables on desktop when reduced motion is not requested", () => {
    desktopMatches(true)
    const { result } = renderHook(() => useParallaxY(ref()))

    expect(result.current.enabled).toBe(true)
  })

  it("stays disabled when reduced motion is requested, even on desktop", () => {
    reduced.value = true
    desktopMatches(true)
    const { result } = renderHook(() => useParallaxY(ref()))

    expect(result.current.enabled).toBe(false)
  })
})
