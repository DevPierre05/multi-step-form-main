/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        Marine_blue: "#0C2340",
        Purplish_blue: "#3A2E7E",
        Pastel_blue: "#7DB9DE",
        Light_blue: "#B4D8E7",
        Strawberry_red: " #C83E4D",
        Cool_gray: "#A7ADB5",
        Light_gray: "#D9DCE1",
        Magnolia: "#FEF7F5",
        Alabaster: "#FEFEFD",
        White: "#FFFFFF",
      },
      backgroundImage: {
        stepBgDesktop: "url('./public/images/bg-sidebar-desktop.svg')",
        stepBgMobile: "url('./public/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};