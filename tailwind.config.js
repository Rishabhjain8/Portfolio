/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const Myclass = plugin(function ({addUtilities}) {
  addUtilities({
    ".perspective": {
      perspective: "1000px"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
  })
} )

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '830px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'smh' : {'min' : '240px', 'max': '312px'},
      'vsmm': { 'max': '312px' },
      'vsmmm': {'max': '400px'},
      'smm': { 'max': '639px' },
      'mdmh' : {'min' : '313px', 'max': '830px'},
      'mdm': { 'max': '830px' },
      'lgm': { 'max': '1024px' },
      'lgt': { 'min': '240px', 'max' : '1230px' },
      'smtmd': { 'min': '640px', 'max': '767px' },
      'mdtlg': { 'min': '830px', 'max': '1024px' },
      // Small to medium 
      // 'lgt': { 'min': '1025px', 'max': '1270px' },
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeOut: {
          '0%': { transform: 'translateX(120%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s linear 1',
        'fade-out': 'fadeOut 0.7s linear 1',
      },
    },
  },
  plugins: [Myclass],
}
