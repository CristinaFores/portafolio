import Link from "next/link"

export type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "outline"
  onClick?: (e: React.MouseEvent) => void
  className?: string
  "aria-label"?: string
}

const BASE = "inline-flex h-10 items-center px-5 text-sm font-medium"
const VARIANT = {
  primary: "btn-primary",
  outline: "btn-outline",
} as const

/**
 * Link styled as a button. Pure `ui/` primitive: callers pass already-translated
 * text as `children`. Render target is chosen from the `href` shape — external
 * (`http`) opens in a new tab, `mailto:`/`tel:` render a plain anchor, and
 * internal paths use the Next.js `<Link>`.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  onClick,
  className,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const classes = `${BASE} ${VARIANT[variant]}${className ? ` ${className}` : ""}`

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  )
}
