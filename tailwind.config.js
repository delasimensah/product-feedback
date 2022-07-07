/** @type {import('tailwindcss').Config} */
const colors = require("./theme/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      letterSpacing: {
        h1: "-0.33px",
        h2: "-0.25px",
        h3: "-0.25px",
        h4: "-0.20px",
      },
      lineHeight: {
        h1: "35px",
        h2: "29px",
        h3: "26px",
        h4: "20px",
        body1: "23px",
        body2: "22px",
        body3: "19px",
      },
      fontFamily: {
        jost: ["Jost"],
      },
    },
  },
  plugins: [],
  important: true,
};
