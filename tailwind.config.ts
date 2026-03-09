import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Editorial Monochrome palette — RGB channel vars for opacity support
        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          alt: "rgb(var(--color-surface-alt) / <alpha-value>)",
          elevated: "rgb(var(--color-surface-elevated) / <alpha-value>)",
          border: "var(--color-border)",
          "border-strong": "var(--color-border-strong)",
        },
        content: {
          DEFAULT: "rgb(var(--color-content) / <alpha-value>)",
          secondary: "rgb(var(--color-content-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-content-muted) / <alpha-value>)",
        },
        dark: {
          DEFAULT: "#222222",
          text: "#FFFFFF",
          muted: "#ABABAB",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-hero": [
          "clamp(4rem, 12vw, 10rem)",
          { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "200" },
        ],
        "display-lg": [
          "clamp(3rem, 6vw, 5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
      },
      borderRadius: {
        DEFAULT: "12px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
