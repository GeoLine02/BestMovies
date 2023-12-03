/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        customMovieDetails: "1300px", // custom large screen
        customFavoritesXL: "1204px", // custom medium screen
      },
    },
  },
  plugins: [],
};
