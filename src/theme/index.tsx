import { extendTheme, ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';
import styles from '@theme/styles';
import { fonts, shadows } from '@theme/foundations';
import components from '@theme/components';
import React from 'react';

const config = {
  cssVarPrefix: 'theme',
};

const Theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  config,
  fonts,
  shadows,
  styles,
  components,
});

const Color = React.createContext(false);

function ThemeProvider({ cookies, children }) {
  const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;
  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={Theme} resetCSS>
      <Color.Provider value={false}>{children}</Color.Provider>
    </ChakraProvider>
  );
}
function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
}
export { ThemeProvider, getServerSideProps };
