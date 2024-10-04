/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        InterThin: ["Inter-Thin", "sans-serif"],
        InterRegular: ["Inter-Regular", "sans-serif"],
        InterBold: ["Inter-Bold", "sans-serif"],
        InterMedium: ["Inter-Medium", "sans-serif"],
        InterExtraBold: ["Inter-ExtraBold", "sans-serif"],
        InterSemiBold: ["Inter-SemiBold", "sans-serif"],
      },
      colors: {
        primary: "#FFC600",
      },
    },
  },
  plugins: [],
};
