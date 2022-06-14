import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import fonts from '@config/fonts.json';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" className="hidden">
        <Head>
          {Object.keys(fonts).map((font) => (
            <link rel="stylesheet" href={fonts[font].url} key={font} />
          ))}
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
