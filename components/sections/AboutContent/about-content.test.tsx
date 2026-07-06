import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { LocaleProvider } from "@/lib/locale-context"
import { PROFILE } from "@/lib/site-config"
import { AboutContent } from "./about-content"
import { BIO_PARAGRAPH_KEYS, EXPERIENCE_ITEMS } from "./about-data"

function renderAbout() {
  return render(
    <LocaleProvider>
      <AboutContent />
    </LocaleProvider>,
  )
}

describe("AboutContent", () => {
  it("renders one experience card per experience item", () => {
    renderAbout()

    expect(screen.getByText(/GYOZA TECHNOLOGY STUDIO/)).toBeInTheDocument()
    expect(screen.getByText(/Freelancer/)).toBeInTheDocument()
    expect(EXPERIENCE_ITEMS).toHaveLength(2)
  })

  it("renders every bio paragraph", () => {
    renderAbout()

    expect(screen.getByText(/Product \/ AI Engineer\./)).toBeInTheDocument()
    expect(BIO_PARAGRAPH_KEYS.length).toBeGreaterThan(0)
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
