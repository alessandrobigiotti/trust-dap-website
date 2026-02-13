import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}", "./contexts/**/*.{ts,tsx}"],
  theme: {
    extend: {fontFamily: {
      sans: ["var(--font-sans)"],
      display: ["var(--font-display)"],
    },
  },
  plugins: [],
} satisfies Config;
