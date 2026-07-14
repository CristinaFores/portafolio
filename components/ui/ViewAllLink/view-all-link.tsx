import { ArrowRight } from "lucide-react"

import { Link } from "@/i18n/navigation"


type ViewAllLinkProps = {
  href: string
  label: string
  className?: string
}

/**
 * Shared "view all →" link used at the end of home page section lists.
 */
export function ViewAllLink({ href, label, className }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className={`group font-mono inline-flex items-center gap-2 text-[13px] font-light text-muted-foreground hover:text-accent ${className}`}
    >
      <span className="link-underline">{label}</span>
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
