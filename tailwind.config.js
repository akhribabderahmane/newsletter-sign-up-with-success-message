/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'orange-tomato':'hsl(4, 100%, 67%)',
        'darkBlue':'hsl(234, 29%, 20%)',
        'Charcoal-Grey':'hsl(235, 18%, 26%)',
        'grey':'hsl(231, 7%, 60%)',
        
      }
    },
  },
  plugins: [],
}

