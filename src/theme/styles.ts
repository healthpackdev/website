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
  },
};

export default {
  global: (props) => ({
    body: {
      bg: mode('gray.50', 'gray.800')(props),
    },
    '.card': {
      bgColor: mode('white', 'gray.700')(props),
    },
    '.muted': {
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
    ...scrollStyles,
  }),
};
