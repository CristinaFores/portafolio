import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // HEX tokens live in app/globals.css. Relative color syntax keeps
        // Tailwind opacity modifiers (e.g. bg-accent/40) working with hex vars.
        background: "rgb(from var(--background) r g b / <alpha-value>)",
        foreground: "rgb(from var(--foreground) r g b / <alpha-value>)",
        card: {
          DEFAULT: "rgb(from var(--card) r g b / <alpha-value>)",
          foreground: "rgb(from var(--card-foreground) r g b / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(from var(--popover) r g b / <alpha-value>)",
          foreground:
            "rgb(from var(--popover-foreground) r g b / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(from var(--primary) r g b / <alpha-value>)",
          foreground:
            "rgb(from var(--primary-foreground) r g b / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(from var(--secondary) r g b / <alpha-value>)",
          foreground:
            "rgb(from var(--secondary-foreground) r g b / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(from var(--muted) r g b / <alpha-value>)",
          foreground: "rgb(from var(--muted-foreground) r g b / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(from var(--accent) r g b / <alpha-value>)",
          foreground:
            "rgb(from var(--accent-foreground) r g b / <alpha-value>)",
        },
        warm: {
          DEFAULT: "rgb(from var(--warm) r g b / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(from var(--destructive) r g b / <alpha-value>)",
          foreground:
            "rgb(from var(--destructive-foreground) r g b / <alpha-value>)",
        },
        border: "rgb(from var(--border) r g b / <alpha-value>)",
        borderAccent: "rgb(from var(--warm-accent) r g b / <alpha-value>)",
        input: "rgb(from var(--input) r g b / <alpha-value>)",
        ring: "rgb(from var(--ring) r g b / <alpha-value>)",
        olive: "rgb(from var(--olive) r g b / <alpha-value>)",
        mauve: "rgb(from var(--mauve) r g b / <alpha-value>)",
        signal: "rgb(from var(--signal) r g b / <alpha-value>)",
        coral: "rgb(from var(--coral) r g b / <alpha-value>)",
        aqua: "rgb(from var(--aqua) r g b / <alpha-value>)",
      },
      fontSize: {
        "heading-lg": "clamp(1.75rem, 4vw, 2.25rem)",
        "heading-md": "clamp(1.75rem, 4vw, 2rem)",
        "heading-sm": "clamp(1.5rem, 3.5vw, 2.25rem)",
      },
      keyframes: {
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.85)" },
        },
      },
      animation: {
        "bounce-subtle": "bounce-subtle 2.2s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
export default config
