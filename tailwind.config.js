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
        "custom-orange": "#EF8F00",
        "custom-blue": "#396E96",
        "custom-black": "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
