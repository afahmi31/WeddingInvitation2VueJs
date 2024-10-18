/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      HelveticaNeue: "Helvetica Neue",
      PlayfairDisplay: "Playfair Display",
      Ephesis: "Ephesis"
    },
    container:{
      center: true
    },
    extend: {},
  },
  plugins: [],
}

