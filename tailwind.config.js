/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        '112': 'calc(100dvh + 80px)',
        '110': 'calc(100dvh - 80px)',
        '150': 'calc(100vh - 200px)',
        
      },
      minWidth:{
        '100':'100vw'
      },
      fontFamily: {
        display: ["Oooh Baby", "cursive"],
        heading: ["Hedvig Letters Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}

