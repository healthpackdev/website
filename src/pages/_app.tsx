import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '@lib/add-icons';
import '@lib/dayjs';
import '@theme/main.css';
import Layout from '@layout/index';

const App = ({ Component, pageProps }: AppProps) => {
  let layoutProps = (Component as Page).layoutProps;

  if (typeof layoutProps === 'function') layoutProps = layoutProps(pageProps);

  return (
    <ThemeProvider attribute="class">
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
