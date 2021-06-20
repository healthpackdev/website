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
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--colors-text-primary)',
            a: {
              color: 'var(--colors-text-link)',
              '&:hover': {
                color: 'var(--colors-text-link-hover)',
              }
            },
          },
        },
      },
      borderColor: {
        DEFAULT: 'var(--colors-border-primary)',
        secondary: 'var(--colors-border-secondary)'
      },
      backgroundColor: {
        primary: 'var(--colors-bg-primary)',
        secondary: 'var(--colors-bg-secondary)',
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
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
