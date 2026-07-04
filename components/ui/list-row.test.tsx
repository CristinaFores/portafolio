import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { ListRow } from "./list-row"

describe("ListRow", () => {
  it("renders title and subtitle", () => {
    render(<ListRow href="/projects/foo" title="Project Foo" subtitle="A short description" />)

    expect(screen.getByRole("heading", { name: "Project Foo" })).toBeInTheDocument()
    expect(screen.getByText("A short description")).toBeInTheDocument()
  })

  it("renders the href on the link", () => {
    render(<ListRow href="/projects/foo" title="Project Foo" subtitle="Description" />)

    expect(screen.getByRole("link")).toHaveAttribute("href", "/projects/foo")
  })

  it("renders N tags", () => {
    render(
      <ListRow
        href="/projects/foo"
        title="Project Foo"
        subtitle="Description"
        tags={[{ label: "Next.js" }, { label: "TypeScript" }, { label: "Tailwind" }]}
      />
    )

    expect(screen.getByText("Next.js")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Tailwind")).toBeInTheDocument()
  })

  it("renders no tags when the list is empty", () => {
    render(<ListRow href="/projects/foo" title="Project Foo" subtitle="Description" tags={[]} />)

    expect(screen.queryByText("Next.js")).not.toBeInTheDocument()
  })

  it("renders media with alt text and sizes", () => {
    render(
      <ListRow
        href="/projects/foo"
        title="Project Foo"
        subtitle="Description"
        media={{ src: "/cover.png", alt: "Project Foo cover", fit: "cover" }}
      />
    )

    const image = screen.getByAltText("Project Foo cover")
    expect(image).toHaveAttribute("sizes", "48px")
  })

  it("applies cover fit vs contain fit classes based on media.fit", () => {
    const { rerender } = render(
      <ListRow
        href="/projects/foo"
        title="Project Foo"
        subtitle="Description"
        media={{ src: "/cover.png", alt: "cover media", fit: "cover" }}
      />
    )

    expect(screen.getByAltText("cover media")).toHaveClass("object-cover")

    rerender(
      <ListRow
        href="/projects/foo"
        title="Project Foo"
        subtitle="Description"
        media={{ src: "/icon.png", alt: "contain media", fit: "contain" }}
      />
    )

    expect(screen.getByAltText("contain media")).toHaveClass("object-contain")
  })

  it("fires onClick when provided", () => {
    const handleClick = vi.fn()
    render(
      <ListRow href="/projects/foo" title="Project Foo" subtitle="Description" onClick={handleClick} />
    )

    fireEvent.click(screen.getByRole("link"))

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
