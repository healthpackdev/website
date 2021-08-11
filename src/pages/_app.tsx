import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import Layout from '@layout/index';

import '@lib/font-awesome';
import '@lib/dayjs';

import '@theme/main.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
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
