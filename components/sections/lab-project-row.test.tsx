import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { LocaleProvider } from "@/lib/locale-context"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { LabProjectRow } from "./lab-project-row"

describe("LabProjectRow", () => {
  const project = LAB_PROJECTS[0]

  it("renders the project name and links to its detail page", () => {
    render(
      <LocaleProvider>
        <LabProjectRow project={project} />
      </LocaleProvider>,
    )
    expect(screen.getByText(project.name)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", `/lab/${project.slug}`)
  })
})
