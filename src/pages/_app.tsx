import { AppProps } from 'next/app';
import { ThemeProvider } from '@theme/index';
import '@scripts/add-icons';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider cookies={pageProps.cookies}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
