import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { SectionRow } from "./section-row"

describe("SectionRow", () => {
  it("renders the label as a heading", () => {
    render(<SectionRow label="Skills">content</SectionRow>)

    expect(screen.getByRole("heading", { name: "Skills" })).toBeInTheDocument()
  })

  it("renders its children", () => {
    render(
      <SectionRow label="Skills">
        <span>inner content</span>
      </SectionRow>,
    )

    expect(screen.getByText("inner content")).toBeInTheDocument()
  })
})
