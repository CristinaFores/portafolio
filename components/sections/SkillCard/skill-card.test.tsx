import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { SkillCard } from "./skill-card"

describe("SkillCard", () => {
  it("renders the category label as a heading", () => {
    render(<SkillCard label="Programming" skills={["TypeScript"]} />)

    expect(screen.getByRole("heading", { name: "Programming" })).toBeInTheDocument()
  })

  it("joins the skills with a middle dot separator", () => {
    render(<SkillCard label="Programming" skills={["TypeScript", "React", "Next.js"]} />)

    expect(screen.getByText("TypeScript · React · Next.js")).toBeInTheDocument()
  })

  it("does not render the noisy top border", () => {
    const { container } = render(<SkillCard label="Programming" skills={["TypeScript"]} />)

    expect(container.firstElementChild).not.toHaveClass("border-t")
  })
})
