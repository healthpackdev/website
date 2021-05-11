import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import site from '@config/site-config.json';
import { css, Global } from '@emotion/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="tr">
        <Head>
          <link rel="preconnect" href={site.font.url} />
          <link rel="preload" href={site.font.url} as="style" />
          <link rel="stylesheet" href={site.font.url} />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css" />
          <Global styles={css`here the other devicons...`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
