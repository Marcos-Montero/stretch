import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        complexGlow: {
          "0%, 100%": {
            boxShadow: "0 0 10px #ccccff, 0 0 20px #ccccff, 0 0 30px #ccccff",
            transform: "rotate(0deg)",
          },
          "25%": {
            boxShadow: "0 0 10px #ffccff, 0 0 20px #ffccff, 0 0 30px #ffccff",
            transform: "rotate(90deg)",
          },
          "50%": {
            boxShadow: "0 0 10px #ccccff, 0 0 20px #ccccff, 0 0 30px #ccccff",
            transform: "rotate(180deg)",
          },
          "75%": {
            boxShadow: "0 0 10px #ffccff, 0 0 20px #ffccff, 0 0 30px #ffccff",
            transform: "rotate(270deg)",
          },
        },
        scrollRight: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(100px, 50px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        scrollLeft: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(-100px, 50px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
        scrollRightFast: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "50%": { transform: "translate(100px, 50px)", opacity: "0" },
          "100%": { transform: "translate(0, 0)", opacity: "1" },
        },
      },
      animation: {
        complexGlow: "complexGlow 8s infinite alternate",
        scrollRight: "scrollRight 15s infinite",
        scrollLeft: "scrollLeft 20s infinite",
        scrollRightFast: "scrollRightFast 10s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config
