/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0038C9',
        'light-blue': '#1478f3',
        'darkblue': '#063682',
        'light-grey': '#999999',
      },
      fontFamily: {
        'fira' : ['fira_code', 'sans-serif'],
      },
      backgroundImage: {
        'pixel': 'url("./assets/black-pixel.gif")',
        'freelanceWebsite' : 'url("./assets/home/stacklab.png")',

      },
      screens: {
        'sm': {'max': '639px'}, // jusqu'à 640px
        'md': {'max': '767px'}, // jusqu'à 768px
        'lg': {'max': '1023px'}, // jusqu'à 1024px
        'xl': {'max': '1279px'}, // jusqu'à 1280px
        '2xl': {'max': '1535px'}, // jusqu'à 1536px
      }, 
      },
    },
  }
