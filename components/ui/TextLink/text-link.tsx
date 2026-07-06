import Link from "next/link"

export type TextLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  "aria-label"?: string
}

/**
 * Inline text link with the animated `link-underline`. Pure `ui/` primitive:
 * callers pass already-translated text as `children`. Render target is chosen
 * from the `href` shape — external (`http`) opens in a new tab, `mailto:`/`tel:`
 * render a plain anchor, and internal paths use the Next.js `<Link>`.
 */
export function TextLink({
  href,
  children,
  className,
  "aria-label": ariaLabel,
}: TextLinkProps) {
  const classes = `link-underline${className ? ` ${className}` : ""}`

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  )
}
