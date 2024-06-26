import type { Config } from "tailwindcss"
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        2: "2",
        3: "3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        roll: "roll 24s infinite linear",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translate(100%)" },
          "100%": { transform: "translate(-100%)" },
        },
      },
    },
  },
  plugins: [forms, typography],
}

export default config
