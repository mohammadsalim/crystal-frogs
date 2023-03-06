const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        chewy: ['Chewy', 'sans-serif']
      },
      colors: {
        'brand-purple': 'var(--clr-purple)',
        'brand-pink': 'var(--clr-pink)',
        'brand-yellow': 'var(--clr-yellow)',
        'brand-blue': 'var(--clr-blue)',
        'brand-green': 'var(--clr-green)',
        'brand-light': 'var(--clr-light)',
        'brand-background': 'var(--clr-background)'
      },
      keyframes: {
        'moving-line': {
          from: {
            width: '0px',
            opacity: '0'
          },
          to: {
            width: '30%',
            opacity: '0.6'
          }
        }
      },
      animation: {
        'pulse-slow': 'pulse 10s linear infinite',
        'moving-line': 'moving-line .8s ease .5s forwards'
      }
    }
  },
  plugins: []
})
