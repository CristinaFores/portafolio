import { render as rtlRender, screen, type RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"
import { describe, expect, it } from "vitest"

import { I18nWrapper } from "@/test-utils/i18n-wrapper"


import { ViewAllLink } from "./view-all-link"

const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: I18nWrapper, ...options })

describe("ViewAllLink", () => {
  it("wraps only the label text in the underline span", () => {
    render(<ViewAllLink href="/projects" label="View all projects" />)

    const label = screen.getByText("View all projects")
    expect(label.tagName).toBe("SPAN")
    expect(label).toHaveClass("link-underline")
  })

  it("renders the arrow icon as a sibling outside the underlined span", () => {
    render(<ViewAllLink href="/projects" label="View all projects" />)

    const link = screen.getByRole("link", { name: /view all projects/i })
    const label = screen.getByText("View all projects")

    // The arrow icon renders as an <svg> sibling of the label span, not nested inside it.
    const arrow = link.querySelector("svg")
    expect(arrow).not.toBeNull()
    expect(arrow?.parentElement).toBe(link)
    expect(label.contains(arrow)).toBe(false)
  })

  it("renders the href on the link", () => {
    render(<ViewAllLink href="/projects" label="View all projects" />)

    expect(screen.getByRole("link")).toHaveAttribute("href", "/es/projects")
  })
})
