import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { I18nWrapper } from "@/test-utils/i18n-wrapper"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { LabProjectRow } from "./lab-project-row"

describe("LabProjectRow", () => {
  const project = LAB_PROJECTS[0]

  it("renders the project name and links to its detail page", () => {
    render(
      <I18nWrapper>
        <LabProjectRow slug={project.slug} />
      </I18nWrapper>,
    )
    expect(screen.getByText(project.name)).toBeInTheDocument()
    expect(screen.getByRole("link")).toHaveAttribute("href", `/es/lab/${project.slug}`)
  })
})
