/* eslint-disable no-unused-vars */
import { Box, BoxProps, Code as ChakraCode } from '@chakra-ui/react';
import { useEffect } from 'react';
import colors from '@theme/prism';
import { Global, css } from '@emotion/react';

import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';

const styles = {
  '.token.bold': {
    fontWeight: 700,
  },
  '.token.italic': {
    fontStyle: 'italic',
  },
  '.token.entity': {
    cursor: 'help',
  },
  '.token.important': {
    fontWeight: 400,
  },
};

Object.entries(colors).forEach(([key, value]) => {
  styles[`.token.${value.css.join(',.token.')}`] = { color: value.color };
});

interface CodeBlockProps extends BoxProps {
  lang: 'javascript' | 'typescript' | 'css' | 'html';
}
const Code: React.FC<CodeBlockProps> = ({ lang, children, ...props }) => {
  const language = lang.replace(/language-/, '');

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const Colored = () => <Global styles={css(styles)} />; // Make it better full performance

  return (
    <Box className="Code">
      <Colored />
      <Box as="pre" p="4" {...props}>
        <ChakraCode className={`language-${language}`} color={colors.variable.color}>
          {children}
        </ChakraCode>
      </Box>
    </Box>
  );
};

export default Code;
