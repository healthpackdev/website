// import { theme } from '@chakra-ui/react';

const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
};
const Button = {
  baseStyle: {
    outline: 'none',
  },
  defaultProps: {
    colorScheme: 'blue',
    borderWidth: '3',
  },
};

const components = {
  Button,
  Link,
};
export default components;
