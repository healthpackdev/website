import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import site from '@config/site-config.json';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script defer data-domain={site.hostName} src="https://plausible.io/js/plausible.js" />
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
