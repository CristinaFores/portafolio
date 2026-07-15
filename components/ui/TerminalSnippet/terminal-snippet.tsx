"use client"

import { useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type TerminalSnippetProps = {
  command: string
  output: string[]
  className?: string
}

const CHAR_MS = 28
const LINE_PAUSE_MS = 120

/**
 * Minimal terminal mockup — typewriter reveal on viewport entry.
 */
export function TerminalSnippet({
  command,
  output,
  className = "",
}: TerminalSnippetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduced = useReducedMotion()
  const [cmdChars, setCmdChars] = useState(reduced ? command.length : 0)
  const [visibleLines, setVisibleLines] = useState(reduced ? output.length : 0)
  const [lineChars, setLineChars] = useState<number[]>(
    reduced ? output.map((l) => l.length) : output.map(() => 0),
  )

  const outputKey = output.join("\0")

  useEffect(() => {
    if (!inView || reduced) return

    let cancelled = false
    let timeout: ReturnType<typeof setTimeout>

    const typeCommand = (i: number) => {
      if (cancelled) return
      if (i <= command.length) {
        setCmdChars(i)
        timeout = setTimeout(() => typeCommand(i + 1), CHAR_MS)
      } else {
        timeout = setTimeout(() => typeLine(0, 0), LINE_PAUSE_MS)
      }
    }

    const typeLine = (lineIdx: number, charIdx: number) => {
      if (cancelled) return
      if (lineIdx >= output.length) return

      const line = output[lineIdx]
      if (charIdx <= line.length) {
        setVisibleLines(lineIdx + 1)
        setLineChars((prev) => {
          const next = [...prev]
          next[lineIdx] = charIdx
          return next
        })
        timeout = setTimeout(() => typeLine(lineIdx, charIdx + 1), CHAR_MS)
      } else {
        timeout = setTimeout(() => typeLine(lineIdx + 1, 0), LINE_PAUSE_MS)
      }
    }

    typeCommand(0)
    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [inView, reduced, command, outputKey, output])

  return (
    <div ref={ref} className={`border border-border bg-[#0c0a08] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
        <span className="size-[8px] rounded-full bg-white/15" aria-hidden />
      </div>
      <div className="flex flex-col gap-2 px-4 py-4 font-mono text-[12px] leading-relaxed">
        <p className="text-white/90">
          <span className="text-accent">$</span> {command.slice(0, cmdChars)}
          {!reduced && inView && cmdChars < command.length && (
            <span className="animate-pulse text-accent" aria-hidden>
              ▌
            </span>
          )}
        </p>
        {output.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="text-white/50">
            {line.slice(0, lineChars[i] ?? 0)}
            {!reduced &&
              inView &&
              i === visibleLines - 1 &&
              (lineChars[i] ?? 0) < line.length && (
                <span className="animate-pulse text-white/30" aria-hidden>
                  ▌
                </span>
              )}
          </p>
        ))}
      </div>
    </div>
  )
}
