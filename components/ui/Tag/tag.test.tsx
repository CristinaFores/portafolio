import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Tag } from "./tag"

describe("Tag", () => {
  it("renders its children", () => {
    render(<Tag>React</Tag>)

    expect(screen.getByText("React")).toBeInTheDocument()
  })

  it("applies the default variant classes", () => {
    render(<Tag>React</Tag>)

    expect(screen.getByText("React")).toHaveClass("bg-secondary", "text-foreground")
  })

  it("applies the status variant classes", () => {
    render(<Tag variant="status">Live</Tag>)

    expect(screen.getByText("Live")).toHaveClass("uppercase", "text-accent")
  })

  it("applies the muted variant classes", () => {
    render(<Tag variant="muted">TypeScript</Tag>)

    expect(screen.getByText("TypeScript")).toHaveClass("text-foreground/80")
    expect(screen.getByText("TypeScript")).not.toHaveClass("bg-secondary")
  })
})
