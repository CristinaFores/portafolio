import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { EducationCard } from "./education-card"

describe("EducationCard", () => {
  it("uses the first line of the label as the title", () => {
    render(<EducationCard year="2022" label={"ISDI Coders — Full Stack\nJun 2022 – Dec 2022\nReact, Node.js"} />)

    expect(screen.getByRole("heading", { name: "ISDI Coders — Full Stack" })).toBeInTheDocument()
  })

  it("renders the year", () => {
    render(<EducationCard year="2022" label="ISDI Coders" />)

    expect(screen.getByText("2022")).toBeInTheDocument()
  })

  it("renders the remaining lines as the description", () => {
    render(<EducationCard year="2022" label={"ISDI Coders\nJun 2022 – Dec 2022\nReact, Node.js"} />)

    expect(screen.getByText(/Jun 2022 – Dec 2022/)).toBeInTheDocument()
    expect(screen.getByText(/React, Node\.js/)).toBeInTheDocument()
  })

  it("omits the description when the label has a single line", () => {
    const { container } = render(<EducationCard year="2022" label="ISDI Coders" />)

    expect(container.querySelector("p")).toBeNull()
  })
})
