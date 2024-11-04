/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myblack: "#1d1d1d",
        myred: "#D41F1F",
      },
      screens: {
        "lg": "1200px",
      },
    }
  },
  plugins: [],
};
