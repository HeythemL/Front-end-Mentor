/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lighter_red : "hsl(13, 100%, 72%)",
        light_red : "hsl(353, 100%, 62%)",
        grayish_blue : "hsl(207, 13%, 34%)",
        black_blue: "hsl(237, 17%, 21%)",
        black_blue2 : "hsl(237, 17%, 21%)"
      },
      fontFamily: {
        ubuntu: 'Ubuntu',
        overpass: 'Overpass'
      }
    },
  },
  plugins: [],
}