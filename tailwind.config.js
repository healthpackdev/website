const fonts = require('./config/fonts.json');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [fonts.sans.name, ...fontFamily.sans],
      comic: [fonts.comic.name, ...fontFamily.sans],
      mono: [fonts.mono.name, ...fontFamily.mono],
    },
    extend: {
      borderRadius: {
        DEFAULT: '.375rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--colors-text-primary)',
            a: {
              textDecoration: 'none',
              color: theme('colors.blue.600'),
              '&:hover': {
                color: theme('colors.blue.800'),
              },
            },
            pre: {
              border: '1px solid var(--colors-border-primary)',
              backgroundColor: 'var(--colors-bg-primary)',
              color: 'var(--colors-text-primary)',
            },
            code: {
              border: '1px solid var(--colors-border-primary)',
              backgroundColor: 'var(--colors-bg-primary)',
              color: 'var(--colors-text-primary)',
            },
            'div[data-title] + pre': {
              marginTop: '0',
              borderRadius: `0 0 .375rem .375rem`,
            },
            'div[data-title]': {
              /* theme/base.css */
            },
            strong: {
              color: 'inherit',
            },
            '.task-list-item': {
              /* theme/base.css */
            },
            th: {
              color: 'var(--colors-text-primary)',
            },
            blockquote: {
              color: 'var(--colors-text-primary)',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
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
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
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
