import { AppProps } from 'next/app';
import { ThemeProvider } from '@theme/index';
import '@scripts/add-icons';

function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
