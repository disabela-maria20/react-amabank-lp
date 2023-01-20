/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    container: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      green: {
        600: '#69B20C',
        300: '#E4F5CE'
      },
      blue: {
        700: '#384B8C'
      },
      black: {
        900: '#000'
      },
      white: {
        50: '#fff'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'xs': '1.07rem',
      'sm': '1.28rem',
      'tiny': '1.54rem',
      'base': '1.85rem',
      'lg': '2.22rem',
      'xl': '2.66rem',
      '2xl': '3.19rem',
      '3xl': '3.83rem',
      '4xl': '4.6rem',
      '5xl': '5.52rem',
      '6xl': '6rem',
      '7xl': '7.9rem',
    },
    extend: {},
  },
  plugins: [],
}
