export type TagProps = {
  children: React.ReactNode
  variant?: "default" | "status"
}

/**
 * Small pill used for stack/tech labels and status badges.
 * `default` carries full-contrast text (fixes the low-contrast complaint
 * on the former `text-foreground/80` pattern). `status` stays a deliberately
 * secondary, uppercase accent badge (e.g. lab project status).
 */
export function Tag({ children, variant = "default" }: TagProps) {
  if (variant === "status") {
    return (
      <span className="border border-border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
        {children}
      </span>
    )
  }

  return (
    <span className="border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] text-foreground">
      {children}
    </span>
  )
}
