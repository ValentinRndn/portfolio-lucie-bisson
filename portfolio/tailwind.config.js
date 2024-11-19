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
        'lightbrown': "#F8F3E9",
        'midbrown': "#E6D8C7",
        "darkbrown": "#D1B9A5",
        'darkblue': "#222651",
        'lightblue': "#638ECA",
        'miidblue': "#395668"
      },
      fontFamily: {
        'fira' : ['fira_code', 'sans-serif'],
      },
      backgroundImage: {
        'logo': 'url("./assets/home/fonds.png")',

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
