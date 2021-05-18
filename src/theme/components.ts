const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
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
