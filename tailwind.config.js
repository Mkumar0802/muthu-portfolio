const AnimateCss = require('animated-tailwindcss')



module.exports = AnimateCss(
  {
  content: ["./src/**/*.{html,js}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx.html}'],
  
  theme: {
    extend: {

      animation: {
        wiggle: 'wiggle 1s ease-in infinite',
        cap: 'cap 1s ease-in infinite',
        iron: 'iron 1s ease-out infinite',
        bounce:'bounce 3s  infinite'
      }
    },
    keyframes: {
      wiggle: {
        '0% :100%': {
          transform: 'scale(1.2)  ',
        },
        '70%': {
          transform: 'scale(0.9) '
        },
      },

      cap: {
        '0% :100%': {
          transform: 'rotate(-7deg) ',
        },
        '70%': {
          transform: 'rotate(7deg) '
        },
      },  


      iron: {
        '0% :100%': {
          transform: 'scale(0.2) ',
        },
        '70%': {
          transform: 'scale(1.1) '
        },
      },



      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        mono: ['Cutive Mono', 'ui-monospace', 'monospace'],

      },
    },
    variants: {},
    plugins: [ require('flowbite/plugin')],
  }

}

)

