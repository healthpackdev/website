import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@lib/add-icons';
import '@lib/dayjs';
import '@theme/main.css';
import Layout from '@layout/index';

const App = ({ Component, pageProps }: AppProps) => {
  let PageProps = (Component as Page).PageProps;

  if (typeof PageProps === 'function') PageProps = PageProps(pageProps);

  return (
    <ThemeProvider attribute="class">
      <Layout {...PageProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
