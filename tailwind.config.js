/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      raleway: "Raleway",
      domine: "Domine",
      manrope: "Manrope",
    },
    
    screens: {
      'xsm': '475px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

      '3xl' : '1825px',

      '4xl': '2150px',

      '5xl': '2160px'
    },
  },
  plugins: [],
}

