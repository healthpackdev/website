import type { AppProps } from 'next/app';
import '@lib/font-awesome';
import '@lib/dayjs';
import '@theme/main.css';
import Layout from '@layout/index';

const App = ({ Component, pageProps }: AppProps) => {
  let layoutProps = (Component as Page).layoutProps;

  if (typeof layoutProps === 'function') layoutProps = layoutProps(pageProps);

  return (
    <Layout {...layoutProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
