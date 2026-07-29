"use client"

import ShikiHighlighter, { createJavaScriptRegexEngine } from "react-shiki/web"

export type CodeBlockProps = {
  code: string
  language?: string
  filename?: string
}

const shikiEngine = createJavaScriptRegexEngine()

/**
 * Dark code block with client-side Shiki highlighting via react-shiki.
 * Renders React elements — no dangerouslySetInnerHTML in our code.
 */
export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  if (!code) return null

  const showHeader = Boolean(filename || language)

  return (
    <figure className="overflow-hidden  border border-border bg-[#17120e] text-sm">
      {showHeader && (
        <figcaption className="flex items-center justify-between border-b border-white/10 px-4 py-2 font-mono text-xs text-white/50">
          <span>{filename ?? ""}</span>
          <span className="tracking-wide">{language ?? ""}</span>
        </figcaption>
      )}
      <ShikiHighlighter
        language={language ?? "javascript"}
        theme="github-dark"
        showLanguage={false}
        showLineNumbers
        startingLineNumber={0}
        className="overflow-x-auto py-4 font-mono leading-relaxed code-block__shiki"
      >
        {code.trimStart()}
      </ShikiHighlighter>
    </figure>
  )
}
