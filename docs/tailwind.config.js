/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.js',
    './pages/**/*.{md,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    colors: {
      ...colors,
      'brand': {
        50: '#DDFFF3',
        100: '#B5F6E0',
        200: '#8CF0CD',
        300: '#60E8BA',
        400: '#36E2A6',
        500: '#1DC98D',
        600: '#119C6D',
        700: '#046F4D',
        800: '#00442E',
        900: '#00180E',
      },
    },
  },
}
