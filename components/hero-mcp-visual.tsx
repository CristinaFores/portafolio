type HeroMcpVisualProps = {
  className?: string
}

/**
 * Schematic pipeline for design-context-bridge.
 */
export function HeroMcpVisual({ className = "" }: HeroMcpVisualProps) {
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

      <rect x="20" y="44" width="68" height="36" className="fill-muted stroke-border" />
      <text x="54" y="66" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
        Figma
      </text>

      <path d="M 92 62 L 112 62" className="stroke-border" strokeWidth="1.5" />
      <path d="M 108 58 L 112 62 L 108 66" className="stroke-border" strokeWidth="1.5" />

      <rect x="116" y="36" width="84" height="52" className="fill-accent/10 stroke-accent" strokeWidth="1.5" />
      <text x="158" y="58" textAnchor="middle" className="fill-accent text-[10px] font-mono font-medium">
        MCP
      </text>
      <text x="158" y="72" textAnchor="middle" className="fill-muted-foreground text-[8px] font-mono">
        servidor
      </text>

      <path d="M 204 62 L 224 62" className="stroke-border" strokeWidth="1.5" />
      <path d="M 220 58 L 224 62 L 220 66" className="stroke-border" strokeWidth="1.5" />

      <rect x="228" y="44" width="68" height="36" className="fill-muted stroke-border" />
      <text x="262" y="66" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
        Agente
      </text>

      <path d="M 300 62 L 320 62" className="stroke-border" strokeWidth="1.5" />
      <path d="M 316 58 L 320 62 L 316 66" className="stroke-border" strokeWidth="1.5" />

      <rect x="324" y="44" width="68" height="36" className="fill-muted stroke-border" />
      <text x="358" y="66" textAnchor="middle" className="fill-muted-foreground text-[10px] font-mono">
        Interfaz
      </text>

      <rect x="116" y="98" width="52" height="20" className="fill-secondary stroke-border" />
      <text x="142" y="111" textAnchor="middle" className="fill-muted-foreground text-[8px] font-mono">
        tokens
      </text>
      <rect x="174" y="98" width="52" height="20" className="fill-secondary stroke-border" />
      <text x="200" y="111" textAnchor="middle" className="fill-muted-foreground text-[8px] font-mono">
        capas
      </text>
      <rect x="232" y="98" width="52" height="20" className="fill-secondary stroke-border" />
      <text x="258" y="111" textAnchor="middle" className="fill-muted-foreground text-[8px] font-mono">
        espaciado
      </text>
    </svg>
  )
}
