import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { ExperienceCard } from "./experience-card"

describe("ExperienceCard", () => {
  const baseProps = {
    title: "Frontend Developer",
    date: "2023 – 2026",
    summary: "Built product interfaces.",
  }

  it("renders title, date and summary", () => {
    render(<ExperienceCard {...baseProps} />)

    expect(screen.getByRole("heading", { name: "Frontend Developer" })).toBeInTheDocument()
    expect(screen.getByText("2023 – 2026")).toBeInTheDocument()
    expect(screen.getByText("Built product interfaces.")).toBeInTheDocument()
  })

  it("renders the company link when provided", () => {
    render(<ExperienceCard {...baseProps} link={{ href: "https://gyoza.es", label: "gyoza.es" }} />)

    expect(screen.getByRole("link", { name: /gyoza\.es/ })).toHaveAttribute("href", "https://gyoza.es")
  })

  it("does not render a link when none is provided", () => {
    render(<ExperienceCard {...baseProps} />)

    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  it("renders one list item per bullet", () => {
    render(<ExperienceCard {...baseProps} bullets={["First", "Second"]} />)

    expect(screen.getAllByRole("listitem")).toHaveLength(2)
  })

  it("omits the bullet list when there are no bullets", () => {
    render(<ExperienceCard {...baseProps} />)

    expect(screen.queryByRole("list")).not.toBeInTheDocument()
  })

  it("renders rich nodes in the summary", () => {
    render(
      <ExperienceCard
        {...baseProps}
        summary={
          <>
            Worked on <strong>Goiko</strong>
          </>
        }
      />,
    )

    expect(screen.getByText("Goiko").tagName).toBe("STRONG")
  })
})
