import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { createI18nWrapper } from "@/test-utils/i18n-wrapper"
import { useTranslatedLabProject, useTranslatedLabProjectDetail } from "./use-translated-lab-project"

describe("useTranslatedLabProject", () => {
  it("resolves the tagline and links in Spanish when locale is es", () => {
    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: createI18nWrapper("es"),
    })

    expect(result.current?.tagline).toMatch(/al vuelo/)
    expect(result.current?.links[0].label).toBe("Ver en GitHub")
  })

  it("resolves the tagline and links in English when locale is en", () => {
    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: createI18nWrapper("en"),
    })

    expect(result.current?.tagline).toMatch(/on the fly/)
    expect(result.current?.links[0].label).toBe("View on GitHub")
  })

  it("falls back to null when the slug does not exist", () => {
    const { result } = renderHook(() => useTranslatedLabProject("does-not-exist"), {
      wrapper: createI18nWrapper("en"),
    })

    expect(result.current).toBeNull()
  })

  it("keeps untranslated base fields (pipeline, tech badges) intact", () => {
    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: createI18nWrapper("es"),
    })

    expect(result.current?.howItWorks.pipeline).toEqual([
      "Tab audio",
      "Whisper (local)",
      "Google Translate",
      "Web Speech API",
    ])
    expect(result.current?.techBadges).toContain("Whisper")
  })
})

describe("useTranslatedLabProjectDetail", () => {
  it("resolves modes and tool group labels for design-context-bridge in the active locale", () => {
    const { result } = renderHook(() => useTranslatedLabProjectDetail("design-context-bridge"), {
      wrapper: createI18nWrapper("es"),
    })

    expect(result.current?.modes[1].name).toBe("Modo REST API")
    expect(result.current?.toolGroups[0].label).toBe("Lectura de selección")
    expect(result.current?.toolGroups[0].tools).toContain("get_current_selection")
  })

  it("returns null for any slug other than design-context-bridge", () => {
    const { result } = renderHook(() => useTranslatedLabProjectDetail("auralang"), {
      wrapper: createI18nWrapper("en"),
    })

    expect(result.current).toBeNull()
  })
})
