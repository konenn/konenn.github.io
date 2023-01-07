/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#464646",
        accent: "#D1B380",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
        dashiell: ["dashiell-fine", "serif"],
        amster: ["amster", "serif"],
      },
    },
  },
  plugins: [],
};
