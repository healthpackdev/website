const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// exclude deprecated colors to avoid warnings (it disturbs me)
delete colors.coolGray;
delete colors.blueGray;
delete colors.warmGray;
delete colors.trueGray;
delete colors.lightBlue;

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{tsx,jsx,js}'],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      light: {
        1: '#fbfcfd',
        2: '#f8f9fa',
        3: '#f1f3f5',
        4: '#eceef0',
        5: '#e6e8eb',
        6: '#dfe3e6',
        7: '#d7dbdf',
        8: '#c1c8cd',
        9: '#889096',
        10: '#7e868c',
        11: '#687076',
        12: '#11181c',
        typography: '#11181c',
        blue: {
          1: '#fbfdff',
          2: '#f5faff',
          3: '#edf6ff',
          4: '#e1f0ff',
          5: '#cee7fe',
          6: '#b7d9f8',
          7: '#96c7f2',
          8: '#5eb0ef',
          9: '#0091ff',
          10: '#0081f1',
          11: '#006adc',
          12: '#00254d',
        },
      },
      dark: {
        1: '#151718',
        2: '#1a1d1e',
        3: '#202425',
        4: '#26292b',
        5: '#2b2f31',
        6: '#313538',
        7: '#3a3f42',
        8: '#4c5155',
        9: '#697177',
        10: '#787f85',
        11: '#9ba1a6',
        12: '#ecedee',

        blue: {
          1: '#000000',
          2: '#0f5afc',
          3: '#1677fe',
          4: '#1476fe',
          5: '#0f7bfe',
          6: '#097cff',
          7: '#047dff',
          8: '#057eff',
          9: '#0095ff',
          10: '#37a1ff',
          11: '#53acff',
          12: '#effbff',
        },
        typography: 'rgba(236, 237, 238, 0.8)',
      },
    },
    fontFamily: {
      sans: ['var(--font-rubik)', ...fontFamily.sans],
      comic: ['var(--font-baloo_2)', ...fontFamily.sans],
      mono: fontFamily.mono,
    },
    extend: {
      borderRadius: {
        DEFAULT: '.375rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--colors-text-typography)',
            a: {
              color: 'var(--colors-text-link)',
              textDecoration: 'underline',
              '&:hover': {
                color: 'var(--colors-text-link-hover)',
              },
            },
            pre: {
              border: '1px solid var(--colors-border-primary)',
              backgroundColor: 'var(--colors-bg-primary)',
              color: 'var(--colors-text-primary)',
              fontSize: '13.6px',
              lineHeight: '1.4rem',
            },
            code: {
              borderRadius: theme('borderRadius.md'),
              padding: '2px 4px',
              border: '1px solid var(--colors-border-primary)',
              backgroundColor: 'var(--colors-bg-primary)',
              color: 'var(--colors-text-primary)',
            },
            'div[data-title] + div pre': {
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
              borderLeftColor: 'var(--colors-border-primary)',
            },
            thead: {
              border: `1px solid var(--colors-border-primary)`,
              borderRadius: theme('borderRadius.md'),
              backgroundColor: 'var(--colors-bg-primary)',
              'th:first-child': false,
              th: {
                padding: `${theme('padding.3')} ${theme('padding.6')}`,
                letterSpacing: '.05em',
                textTransform: 'uppercase',
              },
            },
            table: {
              borderCollapse: 'collapse',
              overflow: 'hidden',
              border: '1px solid var(--colors-border-primary)',
              borderRadius: theme('borderRadius.sm'),

              'th:first-child': false,
              'th:last-child': false,

              td: {
                padding: '.5rem .75rem',
              },
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            'h1,h2,h3,h4,h5': {
              color: 'var(--colors-text-primary)',
            },
          },
        },
      }),
      borderColor: {
        DEFAULT: 'var(--colors-border-primary)',
        hover: 'var(--colors-border-hover)',
      },
      backgroundColor: {
        primary: 'var(--colors-bg-primary)',
        hover: 'var(--colors-bg-hover)',
        active: 'var(--colors-bg-active)',
        'blue-primary': 'var(--colors-bg-blue-primary)',
        'blue-hover': 'var(--colors-bg-blue-hover)',
        'blue-active': 'var(--colors-bg-blue-active)',
      },
      textColor: {
        primary: 'var(--colors-text-primary)',
        secondary: 'var(--colors-text-secondary)',
        link: 'var(--colors-text-link)',
        'link-hover': 'var(--colors-text-link-hover)',
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
