/** @type {import('tailwindcss').Config} */
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
        "custom-blue": "#7185A4",
        "custom-green": "#192D1D",
        "custom-black": "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
