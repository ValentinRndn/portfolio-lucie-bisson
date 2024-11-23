/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      'xxl': ['11rem', {
        lineHeight: '1'
      }],  
    },
    extend: {
      colors: {
        'lightred': "#DE3A31",
        'lightpink': "#F9B29C",
        'darkred': "#5F090A",
        'salmon': "#F96069",
        'lightblue': "#A3879A",
      },
      fontFamily: {
        'fira' : ['fira_code', 'sans-serif'],
        'relation': ['relation-one', 'sans-serif'],
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
