import { mode } from '@chakra-ui/theme-tools';
import { theme } from '@chakra-ui/react';

const scrollStyles = {
  '::-webkit-scrollbar': {
    width: theme.sizes[1],
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.colors.blue[500],
    borderRadius: theme.borders['8px'],
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: theme.colors.blue[600],
  },
  html: {
    scrollBehavior: 'smooth',
    height: 'full',
  },
};
export default {
  global: (props) => ({
    body: {
      bg: mode('rgb(241, 237, 237)', 'gray.800')(props),
    },
    ...scrollStyles,
  }),
};
