/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#1a0b08",
        "espresso-deep": "#231510",
        parchment: "#fcf5ed",
        "parchment-high": "#f7e4de",
        surface: "#fffdfa",
        cream: "#f8f0e6",
        clay: "#775a19",
        "clay-light": "#e9c176",
        gold: "#c9a15a",
        outline: "#817470",
        "outline-variant": "#d3c3be",
        ink: "#231a16",
        "ink-soft": "#4f4441",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Montserrat'", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-14px) scaleX(1.15)", opacity: "0.2" },
          "100%": { transform: "translateY(-28px) scaleX(1)", opacity: "0" },
        },
        widen: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards",
        fadeIn: "fadeIn 1.2s ease forwards",
        steam1: "steam 3.5s ease-in-out infinite",
        steam2: "steam 3.5s ease-in-out 1.2s infinite",
        steam3: "steam 3.5s ease-in-out 2.4s infinite",
      },
    },
  },
  plugins: [],
}
