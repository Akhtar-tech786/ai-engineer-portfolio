import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Cool paper background — deliberately not the warm-cream default.
        paper: "#FAFAF8",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#14181B",
          soft: "#3A4147",
          faint: "#6B7278",
        },
        line: "#E3E4E0",
        // Signal green — a muted terminal/oscilloscope accent, used sparingly.
        signal: {
          DEFAULT: "#2F5D50",
          bright: "#3E7C6B",
          soft: "#E8F0ED",
        },
        warn: "#B5502A",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3.6vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #DADBD6 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        flowLine: {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "pulse-dot": "pulseDot 2.4s ease-in-out infinite",
        "flow-line": "flowLine 1.2s linear infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
