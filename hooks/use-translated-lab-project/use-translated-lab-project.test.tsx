import { renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { LocaleProvider } from "@/i18n/locale-context"
import { useTranslatedLabProject, useTranslatedLabProjectDetail } from "./use-translated-lab-project"

const STORAGE_KEY = "portfolio-locale"

function setLocale(locale: "es" | "en") {
  localStorage.setItem(STORAGE_KEY, locale)
}

describe("useTranslatedLabProject", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("resolves the tagline and links in Spanish when locale is es", () => {
    setLocale("es")

    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: LocaleProvider,
    })

    expect(result.current?.tagline).toMatch(/al vuelo/)
    expect(result.current?.links[0].label).toBe("Ver en GitHub")
  })

  it("resolves the tagline and links in English when locale is en", () => {
    setLocale("en")

    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: LocaleProvider,
    })

    expect(result.current?.tagline).toMatch(/on the fly/)
    expect(result.current?.links[0].label).toBe("View on GitHub")
  })

  it("falls back to null when the slug does not exist", () => {
    setLocale("en")

    const { result } = renderHook(() => useTranslatedLabProject("does-not-exist"), {
      wrapper: LocaleProvider,
    })

    expect(result.current).toBeNull()
  })

  it("keeps untranslated base fields (pipeline, tech badges) intact", () => {
    setLocale("es")

    const { result } = renderHook(() => useTranslatedLabProject("auralang"), {
      wrapper: LocaleProvider,
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
  beforeEach(() => {
    localStorage.clear()
  })

  it("resolves modes and tool group labels for design-context-bridge in the active locale", () => {
    setLocale("es")

    const { result } = renderHook(() => useTranslatedLabProjectDetail("design-context-bridge"), {
      wrapper: LocaleProvider,
    })

    expect(result.current?.modes[1].name).toBe("Modo REST API")
    expect(result.current?.toolGroups[0].label).toBe("Lectura de selección")
    expect(result.current?.toolGroups[0].tools).toContain("get_current_selection")
  })

  it("returns null for any slug other than design-context-bridge", () => {
    setLocale("en")

    const { result } = renderHook(() => useTranslatedLabProjectDetail("auralang"), {
      wrapper: LocaleProvider,
    })

    expect(result.current).toBeNull()
  })
})
