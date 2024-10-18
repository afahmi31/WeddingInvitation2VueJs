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
      DancingScript: "Dancing Script",
      PlayfairDisplay: "Playfair Display",
      Poppins: "Poppins"
    },
    container:{
      center: true
    },
    extend: {},
  },
  plugins: [],
}

