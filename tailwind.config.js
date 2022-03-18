module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        animation : {
          wiggle: 'wiggle 1s ease-in infinite',
        }
    },
    keyframes:{
   wiggle: {
     '0% :100%' : {
       transform: 'scale(1.2) ',
     },
     '70%' :{
       transform : 'scale(0.9) '
     }
    }
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      mono: ['Cutive Mono', 'ui-monospace', 'monospace'],
      
},
},
variants: {},
plugins: [],
}
      
 