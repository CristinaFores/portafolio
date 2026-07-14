import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Paragraph } from "./paragraph"

describe("Paragraph", () => {
  it("renders its children", () => {
    render(<Paragraph>Hello world</Paragraph>)

    expect(screen.getByText("Hello world")).toBeInTheDocument()
  })

  it("applies the base typography classes", () => {
    render(<Paragraph>Text</Paragraph>)

    expect(screen.getByText("Text")).toHaveClass("leading-relaxed", "text-muted-foreground")
  })

  it("merges custom classes over the defaults", () => {
    render(<Paragraph className="text-sm text-foreground">Text</Paragraph>)

    const paragraph = screen.getByText("Text")
    expect(paragraph).toHaveClass("text-sm", "text-foreground")
    expect(paragraph).not.toHaveClass("text-muted-foreground")
  })
})
