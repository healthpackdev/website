const fonts = require('./config/fonts.json');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [fonts.sans.name, ...fontFamily.sans],
      header: [fonts.header.name, ...fontFamily.sans],
    },
    extend: {
      borderColor: {
        DEFAULT: 'var(--colors-border-primary)', // border-opacity will not work.
      },
      backgroundColor: {
        primary: 'rgba(var(--colors-bg-primary), var(--tw-bg-opacity))',
        secondary: 'rgba(var(--colors-bg-secondary), var(--tw-bg-opacity))',
      },
      textColor: {
        primary: 'var(--colors-text-primary)',
        secondary: 'var(--colors-text-secondary)',
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
