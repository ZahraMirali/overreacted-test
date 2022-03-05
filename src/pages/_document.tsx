import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/Merriweather.woff2'
            as='font'
            crossOrigin='anonymous'
          ></link>
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap'
            rel='stylesheet'
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
