/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myblack: "#1d1d1d",
        myred: "#D41F1F",
        mybeige: "#FAF6F1",
      },
      screens: {
        "xs": "450px",
        "md-2": "1000px",
        "lg": "1200px",
        "lg-2": "1480px",
        "2xl": "1600px",
        "3xl": "1700px",
      },
    }
  },
  plugins: [],
};
