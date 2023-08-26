/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'blue-500': '#242848',
      'yellow-500': '#F3B742',
      'blue-600': '#23232f',
      'white': '#ffffff',
      'gray-400': '#4f4f4f',
      'red-500': '#e51a1a',
      'green-500': '#1c9407',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.5' }],
      sm: ['0.875rem', { lineHeight: '1.5715' }],
      base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      '2xl': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
      '3xl': ['1.88rem', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
      '4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
      '5xl': ['3rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
      '6xl': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    },
    screens: {
      'xs': '350px',
      ...defaultTheme.screens,
      'sm': '412px',
      // => @media (min-width: 640px) { ... }

      'md': '600px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

