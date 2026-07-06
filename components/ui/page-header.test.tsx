import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { PageHeader } from "./page-header"

describe("PageHeader", () => {
  it("renders the title as the page h1", () => {
    render(<PageHeader eyebrow="LAB" title="Lab" />)

    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toHaveTextContent("Lab")
  })

  it("renders the eyebrow", () => {
    render(<PageHeader eyebrow="LAB" title="Lab" />)

    expect(screen.getByText("LAB")).toBeInTheDocument()
  })

  it("renders the subtitle when provided", () => {
    render(<PageHeader eyebrow="LAB" title="Lab" subtitle="Experiments" />)

    expect(screen.getByText("Experiments")).toBeInTheDocument()
  })

  it("omits the subtitle when not provided", () => {
    const { container } = render(<PageHeader eyebrow="LAB" title="Lab" />)

    expect(container.querySelectorAll("p")).toHaveLength(1)
  })
})
