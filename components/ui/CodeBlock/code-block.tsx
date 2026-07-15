export type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
}

/**
 * Dark code block with an optional filename/language bar.
 * Presentational — callers pass resolved strings (e.g. from Sanity).
 */
export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  if (!code) return null

  const showHeader = Boolean(filename || language)

  return (
    <figure className="my-6 overflow-hidden rounded-lg border border-border bg-[#17120e] text-sm">
      {showHeader && (
        <figcaption className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-xs text-white/50">
          <span>{filename ?? ""}</span>
          <span className="uppercase tracking-wide">{language ?? ""}</span>
        </figcaption>
      )}
      <pre className="overflow-x-auto px-4 py-4">
        <code className="font-mono text-[13px] leading-relaxed text-white/90">
          {code}
        </code>
      </pre>
    </figure>
  )
}
