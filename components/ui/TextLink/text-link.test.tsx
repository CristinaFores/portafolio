import { render as rtlRender, screen, type RenderOptions } from "@testing-library/react"
import type { ReactElement } from "react"
import { describe, expect, it } from "vitest"

import { I18nWrapper } from "@/test-utils/i18n-wrapper"


import { TextLink } from "./text-link"

const render = (ui: ReactElement, options?: RenderOptions) =>
  rtlRender(ui, { wrapper: I18nWrapper, ...options })

describe("TextLink", () => {
  it("renders children", () => {
    render(<TextLink href="/">Home</TextLink>)
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
  })

  it("always applies the link-underline class", () => {
    render(<TextLink href="/">Home</TextLink>)
    expect(screen.getByRole("link")).toHaveClass("link-underline")
  })

  it("appends a custom className last", () => {
    render(
      <TextLink href="/" className="text-foreground hover:text-accent">
        Home
      </TextLink>,
    )
    const link = screen.getByRole("link")
    expect(link).toHaveClass("link-underline")
    expect(link).toHaveClass("text-foreground")
  })

  it("opens external http links in a new tab", () => {
    render(<TextLink href="https://example.com">External</TextLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("renders mailto links as a plain anchor without target", () => {
    render(<TextLink href="mailto:hi@example.com">Email</TextLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "mailto:hi@example.com")
    expect(link).not.toHaveAttribute("target")
  })

  it("renders internal paths without target", () => {
    render(<TextLink href="/projects">Projects</TextLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/es/projects")
    expect(link).not.toHaveAttribute("target")
  })

  it("forwards aria-label", () => {
    render(
      <TextLink href="/" aria-label="Back home">
        Home
      </TextLink>,
    )
    expect(screen.getByRole("link", { name: "Back home" })).toBeInTheDocument()
  })
})
