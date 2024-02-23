/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerif: [`var(--font-dmSerif)`, "serif"],
        publicSans: [`var(--font-publicSans)`, "sans-serif"],
      },
      colors: {
        darkPink: "#ba4270",
        waterWhite: "#fbfcfe",
        sanJuanBlue: "#36536b",
        mirageBlue: "#1b262f",
        charmPink: "#da6d97",
        lightSanJuanBlue: "#6c8294",
        bgBlue: "#EDF3F8",
        redError: "#FF0000",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
