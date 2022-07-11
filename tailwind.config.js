/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('/hero.png')",
      },
      colors: {
        "custom-orange": "#FD9000",
        "custom-blue": "#011111",
        "custom-black": "rgba(0, 0, 0, 0.25)",
      },
    },
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
