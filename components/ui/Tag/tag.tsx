export type TagVariant = "default" | "accent" | "badge"

export type TagProps = {
  text: string
  variant?: TagVariant | undefined
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
  default: "text-muted-foreground",
  accent: "text-accent border-[var(--border-accent)]",
  badge: "text-white bg-accent border-[var(--border-accent)]",
}

export function Tag({ text, variant = "default" }: TagProps) {
  return (
    <span
      className={` tracking-wider border font-mono font-light text-xs px-2 py-0.5 text-center ${VARIANT_CLASSES[variant]}`}
    >
      {text}
    </span>
  )
}
