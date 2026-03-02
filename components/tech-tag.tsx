import { ReactIcon, VueIcon, NextIcon } from "@/components/icons"

/**
 * Figma brand icon used in technology tags.
 */
export function FigmaIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
      <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
      <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
      <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
      <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
    </svg>
  )
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Figma": FigmaIcon,
  "Next.js": NextIcon,
  "React": ReactIcon,
  "React Native": ReactIcon,
  "Vue": VueIcon,
}

const labelMap: Record<string, string> = {
  "Figma": "UI",
  "Next.js": "Development",
  "React": "Development",
  "React Native": "Development",
  "Vue": "Development",
}

/**
 * Badge that maps a technology name to a normalized label and optional icon.
 */
export function TechTag({ tag }: { tag: string }) {
  const Icon = iconMap[tag]
  const label = labelMap[tag] || tag

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs leading-snug text-muted-foreground">
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {label}
    </span>
  )
}
