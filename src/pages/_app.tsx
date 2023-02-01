import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import Layout from '@layout/index';

import '@lib/font-awesome';
import '@lib/dayjs';

import '@theme/main.css';

import { Rubik, Baloo_2 } from '@next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
});

const baloo_2 = Baloo_2({
  subsets: ['latin'],
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  let layoutProps = (Component as Page).layoutProps;
  if (typeof layoutProps === 'function') layoutProps = layoutProps(pageProps);

  return (
    <ThemeProvider attribute="class">
      <Analytics mode={process.env.NODE_ENV === 'production' ? 'production' : 'development'} />
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
