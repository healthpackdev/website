import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import Layout from '@layout/index';

import '@lib/font-awesome';
import '@lib/dayjs';

import '@theme/main.css';

import { Rubik, Baloo_2 } from '@next/font/google';

const rubik = Rubik({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const baloo_2 = Baloo_2({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  let layoutProps = (Component as Page).layoutProps;
  if (typeof layoutProps === 'function') layoutProps = layoutProps(pageProps);

  return (
    <ThemeProvider attribute="class">
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
            --font-baloo_2: ${baloo_2.style.fontFamily};
          }
        `}
      </style>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
