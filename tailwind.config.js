module.exports = {
  purge: [],
  darkMode: false,
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Archivo"],
      serif: ["Merriweather"],
    },
    extend: {
      colors: {
        primary: "#027a0e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
