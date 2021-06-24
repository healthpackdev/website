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
      mono: [fonts.mono.name, ...fontFamily.mono],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--colors-text-primary)',
            a: {
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            pre: {
              wordBreak: 'break-down',
              color: 'var(--colors-text-primary)',
              backgroundColor: 'var(--colors-bg-primary)',
            },
            'h1,h2,h3,h4,h5': {
              color: 'var(--colors-text-secondary)',
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
          },
        },
      }),
      borderColor: {
        DEFAULT: 'var(--colors-border-primary)',
        secondary: 'var(--colors-border-secondary)',
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
    typography: ['dark'],
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
