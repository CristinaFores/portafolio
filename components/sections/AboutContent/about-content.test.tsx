import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { I18nWrapper } from "@/test-utils/i18n-wrapper"
import { PROFILE } from "@/lib/site-config"
import { AboutContent } from "./about-content"
import esMessages from "@/messages/es.json"
import { EXPERIENCE_ITEMS } from "./about-data"

function renderAbout() {
  return render(
    <I18nWrapper>
      <AboutContent />
    </I18nWrapper>,
  )
}

describe("AboutContent", () => {
  it("renders one experience card per experience item", () => {
    renderAbout()

    expect(screen.getByText(/GYOZA TECHNOLOGY STUDIO/)).toBeInTheDocument()
    expect(screen.getByText(/Freelancer/)).toBeInTheDocument()
    expect(EXPERIENCE_ITEMS).toHaveLength(2)
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
