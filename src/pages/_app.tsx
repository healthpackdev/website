import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../../scripts/add-icons';
import '../../scripts/dayjs';
import '@theme/main.css';
import Layout from '@layout/index';

const App = ({ Component, pageProps }: AppProps) => {
  let LayoutProps = (Component as Page).LayoutProps;

  if (typeof LayoutProps === 'function') LayoutProps = LayoutProps(pageProps);

  return (
    <ThemeProvider attribute="class">
      <Layout {...LayoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
