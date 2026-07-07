import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import type { ReactNode } from "react"
import { I18nWrapper } from "@/test-utils/i18n-wrapper"
import { useTranslatedProject } from "./use-translated-project"

function wrapper({ children }: { children: ReactNode }) {
  return <I18nWrapper>{children}</I18nWrapper>
}

describe("useTranslatedProject", () => {
  it("merges base data with localized text for a known slug", () => {
    const { result } = renderHook(() => useTranslatedProject("wayvo"), { wrapper })

    // Default locale is "es" — the project resolves with populated text.
    expect(result.current).not.toBeNull()
    expect(result.current?.slug).toBe("wayvo")
    expect(result.current?.title.length).toBeGreaterThan(0)
    expect(result.current?.challenge.length).toBeGreaterThan(0)
    // imageAlts come from the translation, one per image.
    expect(result.current?.images.length).toBeGreaterThan(0)
  })

  it("returns null for an unknown slug", () => {
    const { result } = renderHook(() => useTranslatedProject("does-not-exist"), {
      wrapper,
    })

    expect(result.current).toBeNull()
  })
})
