/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      league: "League Script",
      playwrite: "Playwrite Hrvatska Lijeva",
      raleway: "Raleway",
      madi: "Ms Madi",
      formal: "Petit Formal Script",
      roboto: "Roboto",
      montserrat: "Montserrat",
      crimson: "Crimson Text",
      enriqueta: "Enriqueta",
      open: "Open Sans",
      nunito: "Nunito",
      luxury: "Luxurious Roman",
      pirata: "Pirata One",
      almendra: "Almendra SC"
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

