import { cn } from "@/lib/class-names"

type BulletVariant = "dot" | "dash"

const MARKER: Record<BulletVariant, string> = {
  dot: "mt-1.5 size-1 rounded-full bg-muted-foreground/40",
  dash: "mt-[9px] h-px w-3 bg-muted-foreground/50",
}

type BulletListProps = {
  items: readonly string[]
  variant?: BulletVariant
  className?: string
}

/**
 * Shared vertical bullet list. `dot` for detail sections, `dash` for the
 * denser experience cards. Pass `className` to tweak the list spacing.
 */
export function BulletList({
  items,
  variant = "dot",
  className,
}: BulletListProps) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
        >
          <span className={cn("block shrink-0", MARKER[variant])} aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  )
}
