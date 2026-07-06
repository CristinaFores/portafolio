import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ButtonLink } from "./button-link"

describe("ButtonLink", () => {
  it("renders children", () => {
    render(<ButtonLink href="/#projects">View work</ButtonLink>)
    expect(screen.getByRole("link", { name: "View work" })).toBeInTheDocument()
  })

  it("applies the primary variant class by default", () => {
    render(<ButtonLink href="/#projects">View work</ButtonLink>)
    expect(screen.getByRole("link")).toHaveClass("btn-primary")
  })

  it("applies the outline variant class", () => {
    render(
      <ButtonLink href="/#connect" variant="outline">
        Connect
      </ButtonLink>,
    )
    expect(screen.getByRole("link")).toHaveClass("btn-outline")
  })

  it("appends a custom className last", () => {
    render(
      <ButtonLink href="mailto:hi@example.com" className="justify-center">
        Email
      </ButtonLink>,
    )
    expect(screen.getByRole("link")).toHaveClass("justify-center")
  })

  it("opens external http links in a new tab", () => {
    render(<ButtonLink href="https://example.com">External</ButtonLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("renders mailto links as a plain anchor without target", () => {
    render(<ButtonLink href="mailto:hi@example.com">Email</ButtonLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "mailto:hi@example.com")
    expect(link).not.toHaveAttribute("target")
  })

  it("renders internal paths without target", () => {
    render(<ButtonLink href="/#projects">View work</ButtonLink>)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("href", "/#projects")
    expect(link).not.toHaveAttribute("target")
  })

  it("calls onClick when clicked", () => {
    const onClick = vi.fn()
    render(
      <ButtonLink href="/#projects" onClick={onClick}>
        View work
      </ButtonLink>,
    )
    screen.getByRole("link").click()
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("forwards aria-label", () => {
    render(
      <ButtonLink href="/#projects" aria-label="Go to projects">
        View work
      </ButtonLink>,
    )
    expect(screen.getByRole("link", { name: "Go to projects" })).toBeInTheDocument()
  })
})
