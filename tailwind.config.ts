import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0c",
          soft: "#111114",
          raised: "#16161b",
          border: "#1f1f26",
          muted: "#2a2a33",
        },
        bone: {
          DEFAULT: "#f5f3ef",
          muted: "#a8a6a0",
          dim: "#6b6965",
        },
        signal: {
          400: "#9560ff",
          500: "#7c3aed",
          700: "#5818b0",
          glow: "#a78bfa",
        },
        ok: "#6fcf97",
        warn: "#f2c14e",
        bad: "#e06c75",
        tier: {
          a: "#6fcf97",
          b: "#a78bfa",
          c: "#f2c14e",
          d: "#e06c75",
        },
      },
      maxWidth: {
        shell: "1400px",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        house: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
