/* eslint-disable react/react-in-jsx-scope */
// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class FEDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" href="/static/bootstrap.min.css" />
          <script src="/static/jquery.min.js" />
          <script src="/static/bootstrap.bundle.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FEDocument;
