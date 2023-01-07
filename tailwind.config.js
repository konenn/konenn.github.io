/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A5A5A",
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
