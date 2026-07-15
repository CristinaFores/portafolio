interface BlockquoteProps {
  text: string
}

/**
 * Accent-bordered pull quote. Presentational — the composing section resolves
 * i18n and passes the final text (see ListRow ADR-2).
 */
export function Blockquote({ text }: BlockquoteProps) {
  return (
    <blockquote className="border-l-2 border-accent pl-3 font-display text-sm font-medium leading-snug tracking-tight text-foreground">
      {text}
    </blockquote>
  )
}
