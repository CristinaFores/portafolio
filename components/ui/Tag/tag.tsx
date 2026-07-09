export type TagVariant = "default" | "status" | "muted"

export type TagProps = {
  children: React.ReactNode
  variant?: TagVariant
}

/**
 * Small pill used for stack/tech labels and status badges.
 * `default` is the strongest: filled surface, full-contrast text.
 * `muted` is a lighter outline variant for secondary metadata (tech badges,
 * pipeline steps) — still high enough contrast to be legible, no fill so it
 * stays below `default` in the visual hierarchy. `status` is the uppercase
 * accent badge for lab project status.
 */
const VARIANT_CLASSES: Record<TagVariant, string> = {
  default: "px-2 text-xs text-muted-foreground",
  muted: "px-2 text-xs text-foreground/80",
  status: "uppercase tracking-wider text-accent border-[var(--border-accent)] px-1.5 text-[11px]",
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span className={`border py-0.5 font-mono font-medium ${VARIANT_CLASSES[variant]}`}>
      {children}
    </span>
  )
}
