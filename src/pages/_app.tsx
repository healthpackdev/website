import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@scripts/add-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@theme/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
