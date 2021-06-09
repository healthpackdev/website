const fonts = require('./config/fonts.json');
const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: [fonts.primary.name, ...fontFamily.sans],
      header: [fonts.header.name, ...fontFamily.sans],
    },
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        700: '#2D3748',
        800: '#1A202C',
      },
    },
    container: {
      // maxWidth: '1024px', not working.
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
