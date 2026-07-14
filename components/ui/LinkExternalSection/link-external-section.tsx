import { ArrowUpRight } from "lucide-react"

interface LinkExternalSectionProps {
  href: string
  label: string
}

export function LinkExternalSection({ href, label }: LinkExternalSectionProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent">
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}
