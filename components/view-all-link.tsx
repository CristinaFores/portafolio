import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ViewAllLinkProps = {
  href: string
  label: string
}

/**
 * Shared "view all →" link used at the end of home page section lists.
 */
export function ViewAllLink({ href, label }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-foreground link-underline hover:text-accent"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
