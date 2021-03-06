const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
        "in-out": "cubic-bezier(.51,.01,.51,1)",
      },
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
        accent: "#e6394655 0 0.15rem 1rem",
        primary: "#6a040f44 0 0.1rem 1rem",
        hover: "rgba(0, 0, 0, 0.2) 0 0.2em 1rem",
      }
    },
    fontFamily: {
        sans: "Inter", 
        serif: "Roboto Slab"
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
        black: "#FFF8E5",
        bold: "#fcdfb0",
        font: "#fcdfb0",
        darker: "#131435",
        dark: "#1E1F57",
        DEFAULT: "#6A040F",
        brighter: "#FCDFB0",
        white: "#FFF8E5"
      },
      accent: {
        DEFAULT: "#bf1535"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
