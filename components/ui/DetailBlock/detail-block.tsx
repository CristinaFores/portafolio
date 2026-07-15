import type { ReactNode } from "react"

import { BlockSection } from "@/components/ui/BlockSection/block-section"
import { LabelSection } from "@/components/ui/LabelSection/label-section"

type DetailBlockProps = {
  label: string
  children: ReactNode
}

/**
 * A labelled block on the detail pages: a monospaced label column and its
 * content, laid out by BlockSection.
 */
export function DetailBlock({ label, children }: DetailBlockProps) {
  return (
    <BlockSection>
      <LabelSection label={label} />
      {children}
    </BlockSection>
  )
}
