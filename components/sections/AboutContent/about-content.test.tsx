import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { I18nWrapper } from "@/test-utils/i18n-wrapper"
import { PROFILE } from "@/lib/site-config"
import { AboutContent } from "./about-content"
import esMessages from "@/messages/es.json"

function renderAbout() {
  return render(
    <I18nWrapper>
      <AboutContent />
    </I18nWrapper>,
  )
}

describe("AboutContent", () => {
  it("renders one experience card per experience entry in the messages", () => {
    renderAbout()

    const experienceEntries = Object.values(esMessages.about.experience).filter(
      (value) => typeof value === "object" && value !== null,
    )
    expect(experienceEntries.length).toBeGreaterThan(0)
    for (const entry of experienceEntries) {
      expect(screen.getByRole("heading", { name: entry.title })).toBeInTheDocument()
    }
  })

  it("renders one paragraph per numbered bio entry in the messages", () => {
    renderAbout()

    const bioKeys = Object.keys(esMessages.about.bio).filter((key) => /^\d+$/.test(key))
    expect(bioKeys.length).toBeGreaterThan(0)
    expect(screen.getByText(/Construyo interfaces de producto/)).toBeInTheDocument()
    expect(screen.getByText(/Cuando una herramienta que necesito no existe/)).toBeInTheDocument()
    expect(screen.getByText("Zustand", { selector: "strong" })).toBeInTheDocument()
  })

  it("links the CV button to the profile CV url", () => {
    renderAbout()

    expect(screen.getByRole("link", { name: /cv/i })).toHaveAttribute("href", PROFILE.cvUrl)
  })

  it("renders the education entry with its year", () => {
    renderAbout()

    expect(screen.getByText(/ISDI Coders/)).toBeInTheDocument()
    expect(screen.getByText("2022")).toBeInTheDocument()
  })
})
