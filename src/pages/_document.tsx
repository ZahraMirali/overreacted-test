import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Merriweather-SemiBold.woff2'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Merriweather-Regular.woff2'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link
            rel='preload'
            href='/fonts/Montserrat.woff2'
            as='font'
            crossOrigin='anonymous'
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
