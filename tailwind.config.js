/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#AD1FEA",
        deepBlue: "#4661E6",
        lightBlue: "#62BCFA",
        pink: "#F49F85",
        ghostWhite: "#F2F4FF",
        ghostWhite2: "#F7F8FD",
        gore: "#3A4374",
        bay: "#373F68",
        grey: "#647196",
      },
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
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        "header-sm": "url('/assets/suggestions/mobile/background-header.png')",
        "header-md": "url('/assets/suggestions/tablet/background-header.png')",
        "header-lg": "url('/assets/suggestions/desktop/background-header.png')",
      },
    },
  },
  plugins: [],
  important: true,
};
