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
        // Precision Engineering palette
        surface: {
          DEFAULT: "#0A0A0B",     // Deep Space Black — main bg
          card: "#161618",         // Obsidian Grey — cards/surfaces
          elevated: "#1C1C1F",     // Slightly lighter for hover states
          border: "rgba(255,255,255,0.06)", // Ultra-thin borders
        },
        content: {
          DEFAULT: "#F2F2F2",      // Pure Snow — primary text
          secondary: "#8E8E93",    // Silver Chrome — secondary text
          muted: "#5A5A5E",        // Muted text
        },
        accent: {
          DEFAULT: "#00D4FF",      // Electric Cyan — innovation accent
          dim: "rgba(0,212,255,0.1)",  // Cyan glow bg
          glow: "rgba(0,212,255,0.15)",
          hover: "#00BFEA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      backdropBlur: {
        nav: "20px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
