import type { AppProps } from 'next/app';
import '@lib/font-awesome';
import '@lib/dayjs';
import '@theme/main.css';
import Layout from '@layout/index';
import type { NextPage } from 'next';

if (process.env.NODE_ENV !== 'production') {
  import('preact/debug');
}

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  let layoutProps = (Component as Page).layoutProps;

  if (typeof layoutProps === 'function') layoutProps = layoutProps(pageProps);

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
