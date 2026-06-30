"use client"

import { PageTemplate } from "@/components/page-template"

type MainShellProps = {
  children: React.ReactNode
}

export function MainShell({ children }: MainShellProps) {
  return (
    <main className="relative min-h-[50vh] overflow-x-clip">
      <PageTemplate>{children}</PageTemplate>
    </main>
  )
}
