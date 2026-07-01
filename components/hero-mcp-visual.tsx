"use client"

import { motion, useReducedMotion } from "framer-motion"
import { EASE } from "@/lib/motion"

type HeroMcpVisualProps = {
  className?: string
}

const NODE_DELAYS = [0.1, 0.35, 0.55, 0.75] as const

function FlowLine({
  d,
  delay,
  reduced,
}: {
  d: string
  delay: number
  reduced: boolean | null
}) {
  if (reduced) {
    return <path d={d} className="stroke-border" strokeWidth="1.5" fill="none" />
  }
  return (
    <motion.path
      d={d}
      className="stroke-border"
      strokeWidth="1.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    />
  )
}

function FlowNode({
  x,
  y,
  w,
  h,
  label,
  sublabel,
  delay,
  reduced,
  accent = false,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  sublabel?: string
  delay: number
  reduced: boolean | null
  accent?: boolean
}) {
  const rectClass = accent ? "fill-accent/10 stroke-accent" : "fill-muted stroke-border"
  const strokeW = accent ? 1.5 : 1

  if (reduced) {
    return (
      <g>
        <rect x={x} y={y} width={w} height={h} className={rectClass} strokeWidth={strokeW} />
        <text
          x={x + w / 2}
          y={y + h / 2 + (sublabel ? -4 : 4)}
          textAnchor="middle"
          className={accent ? "fill-accent text-[10px] font-mono font-medium" : "fill-muted-foreground text-[10px] font-mono"}
        >
          {label}
        </text>
        {sublabel && (
          <text
            x={x + w / 2}
            y={y + h / 2 + 10}
            textAnchor="middle"
            className="fill-muted-foreground text-[8px] font-mono"
          >
            {sublabel}
          </text>
        )}
      </g>
    )
  }

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    >
      <motion.rect
        x={x}
        y={y}
        width={w}
        height={h}
        className={rectClass}
        strokeWidth={strokeW}
        animate={
          accent
            ? { strokeOpacity: [1, 0.55, 1] }
            : undefined
        }
        transition={
          accent
            ? { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: delay + 0.8 }
            : undefined
        }
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + (sublabel ? -4 : 4)}
        textAnchor="middle"
        className={accent ? "fill-accent text-[10px] font-mono font-medium" : "fill-muted-foreground text-[10px] font-mono"}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 10}
          textAnchor="middle"
          className="fill-muted-foreground text-[8px] font-mono"
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  )
}

/**
 * Schematic pipeline for design-context-bridge — paths draw in, MCP pulses.
 */
export function HeroMcpVisual({ className = "" }: HeroMcpVisualProps) {
  const reduced = useReducedMotion()

  return (
    <svg
      viewBox="0 0 420 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="hero-visual-title"
    >
      <title id="hero-visual-title">Figma, MCP, agente de IA e interfaz</title>

      <rect x="1" y="1" width="418" height="138" className="fill-card stroke-border" strokeWidth="1" />

      <FlowNode x={20} y={44} w={68} h={36} label="Figma" delay={NODE_DELAYS[0]} reduced={reduced} />

      <FlowLine d="M 92 62 L 112 62" delay={0.22} reduced={reduced} />
      <FlowLine d="M 108 58 L 112 62 L 108 66" delay={0.25} reduced={reduced} />

      <FlowNode
        x={116}
        y={36}
        w={84}
        h={52}
        label="MCP"
        sublabel="servidor"
        delay={NODE_DELAYS[1]}
        reduced={reduced}
        accent
      />

      <FlowLine d="M 204 62 L 224 62" delay={0.42} reduced={reduced} />
      <FlowLine d="M 220 58 L 224 62 L 220 66" delay={0.45} reduced={reduced} />

      <FlowNode x={228} y={44} w={68} h={36} label="Agente" delay={NODE_DELAYS[2]} reduced={reduced} />

      <FlowLine d="M 300 62 L 320 62" delay={0.62} reduced={reduced} />
      <FlowLine d="M 316 58 L 320 62 L 316 66" delay={0.65} reduced={reduced} />

      <FlowNode x={324} y={44} w={68} h={36} label="Interfaz" delay={NODE_DELAYS[3]} reduced={reduced} />

      {(["tokens", "capas", "espaciado"] as const).map((tag, i) => (
        <motion.g
          key={tag}
          initial={reduced ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.35, delay: 0.85 + i * 0.08, ease: EASE }}
        >
          <rect
            x={116 + i * 58}
            y={98}
            width={52}
            height={20}
            className="fill-secondary stroke-border"
          />
          <text
            x={142 + i * 58}
            y={111}
            textAnchor="middle"
            className="fill-muted-foreground text-[8px] font-mono"
          >
            {tag}
          </text>
        </motion.g>
      ))}
    </svg>
  )
}
