import type { ReactNode } from "react"

export type CalloutProps = {
  label: string
  content: ReactNode
  variant?: "note" | "warm"
}

const variants = {
  note: {
    borderColor: "border-accent",
    backgroundColor: "bg-accent/10",
    textColor: "text-accent",
  },
  warm: {
    borderColor: "border-warm",
    backgroundColor: "bg-warm/10",
    textColor: "text-warm",
  },
}

/**
 * Accent-bordered informational callout. Presentational — the composing
 * section resolves i18n and passes the final label and body content.
 */
export function Callout({ label, content, variant = "note" }: CalloutProps) {
  const variantStyles = variants[variant]
  return (
    <aside
      className={`rounded-lg border-l-2 ${variantStyles.borderColor} ${variantStyles.backgroundColor} pl-3 pr-5 py-3 flex flex-col gap-1`}
    >
      <p
        className={`font-mono text-xs font-medium tracking-wider ${variantStyles.textColor}`}
      >
        {label}
      </p>
      <div className="text-sm leading-relaxed text-foreground font-sans">
        {content}
      </div>
    </aside>
  )
}
