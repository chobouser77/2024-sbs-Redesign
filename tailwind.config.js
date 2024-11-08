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
        "md-2": "900px",
        "md-3": "1000px",
        "md-4": "1100px",
        "lg": "1200px",
        "xl": "1300px",
        "2xl": "1400px",
        "3xl": "1500px",
        "4xl": "1800px",
      },
    }
  },
  plugins: [],
};
