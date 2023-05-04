/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xsm: "374px",
    },
    fontFamily: {
      sans: ['"SansSerifBldFLF"', "serif"],
    },
    extend: {},
  },
  plugins: [],
};