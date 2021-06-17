import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../../scripts/add-icons';
import '@theme/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
