type SectionHeadingProps = {
  index: string
  title: string
  subtitle?: string
  className?: string
  inverse?: boolean
}

/**
 * Editorial section header with mono index and Syne title.
 */
export function SectionHeading({
  index,
  title,
  subtitle,
  className = "",
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p
        className={`font-mono text-xs uppercase tracking-[0.08em] ${
          inverse ? "text-inverse-foreground/55" : "text-muted-foreground"
        }`}
      >
        {index}
      </p>
      <h2
        className={`font-display text-balance font-semibold leading-[1.12] tracking-[-0.02em] ${
          inverse ? "text-inverse-foreground" : "text-foreground"
        }`}
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            inverse ? "text-inverse-foreground/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
