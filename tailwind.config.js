const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        appear: "appear 1s cubic-bezier(.46,.04,.22,.87) 0.25s 1 forwards",
        fadein: "fadein 0.4s ease-in-out 1",
        gradient: "gradient 2s linear infinite"
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0%", transform: "translate(0%, -20%)"},
          "100%": {opacity: "100%", transform: "translate(0,0)"}
        },
        fadein: {
          "from": {opacity: "0%;"},
          "to": {opacity: "100%;"}
        },
        gradient: {
          "0%": {"background-position": "00% 50%", "background-size": "200% 200%"},
          "100%": {"background-position": "200% 50%", "background-size": "200% 200%"},
        },
      },
      boxShadow: {
        DEFAULT: "rgba(0, 0, 0, 0.3) 0 0.15rem 1rem",
        hover: "rgba(0, 0, 0, 0.35) 0 0.1rem 1.7rem",
      }
    },
    colors:{
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.warmGray,
      indigo: colors.indigo,
      cyan: colors.cyan,
      blue: colors.lightBlue,
      red: colors.red,
      violet: colors.violet,
      purple: colors.purple,
      primary: {
        black: "#180202",
        bold: "#371919",
        font: "#623737",
        darker: "#871919",
        dark: "#a41e1e",
        DEFAULT: "#c32828",
        bright: "#ff5252",
        brighter: "#ffdbdb",
        brightest: "#fff1f0",
        white: "#fff8f6"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
