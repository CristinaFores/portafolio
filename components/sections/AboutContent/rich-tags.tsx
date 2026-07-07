import type { ReactNode } from "react"

/**
 * Shared tag handlers for `t.rich()` in the About section. Messages may use
 * `<strong>` for keyword highlights and `<em>` for emphasized statements.
 */
export const RICH_TAGS = {
  strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
  em: (chunks: ReactNode) => <em>{chunks}</em>,
}

/** Styling hook for the rich tags rendered inside a paragraph. */
export const RICH_TEXT_CLASSES = "[&_strong]:font-medium [&_strong]:text-foreground [&_em]:italic"
