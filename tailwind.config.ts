import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)", "Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        "ds-surface": "#0a0f1a",
        "ds-card": "#0f172a",
        "ds-muted": "#94a3b8",
        "ds-accent": "#7c3aed",
        "ds-accent-2": "#22d3ee"
      },
      boxShadow: {
        glow: "0 10px 50px -12px rgba(124, 58, 237, 0.45)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at top, rgba(124,58,237,0.15), transparent 50%)"
      }
    }
  },
  plugins: []
};

export default config;
