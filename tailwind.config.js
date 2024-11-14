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
        "md-2": "1000px",
        "lg": "1200px",
        "lg-2": "1480px",
        "3xl": "1700px",
      },
    }
  },
  plugins: [],
};
