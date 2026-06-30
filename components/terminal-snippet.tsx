type TerminalSnippetProps = {
  command: string
  output: string[]
  className?: string
}

/**
 * Minimal terminal mockup for showing a real install command and output.
 * No fake screenshots — this is typographic, sourced from real CLI usage.
 */
export function TerminalSnippet({ command, output, className = "" }: TerminalSnippetProps) {
  return (
    <div className={`border border-border bg-[#0c0a08] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4 font-mono text-[12px] leading-relaxed">
        <p className="text-white/90">
          <span className="text-accent">$</span> {command}
        </p>
        {output.map((line, i) => (
          <p key={i} className="text-white/50">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
