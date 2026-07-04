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
  default: "bg-secondary px-2 text-xs text-foreground",
  muted: "px-2 text-xs text-foreground/80",
  status: "px-1.5 text-[11px] uppercase tracking-wider text-accent",
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span className={`border border-border py-0.5 font-mono font-medium ${VARIANT_CLASSES[variant]}`}>
      {children}
    </span>
  )
}
