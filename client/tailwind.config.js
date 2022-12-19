/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", ",/public/index.html"],
  theme: {
    extend: {
      letterSpacing: {
        big: "3.0em",
      },
      fontFamily: {
        MinionProMedium: ["MinionProMedium", "sans-serif"],
        MinionProBoldCond: ["MinionProBoldCond", "sans-serif"],
      },
    },
  },
  plugins: [],
};
