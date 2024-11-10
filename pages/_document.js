import Document, { Head, Html, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-GB" className="dark">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link rel="icon" type="image/png" href={"/favicon/favicon.ico"} />
        </Head>
        <body className="font-main text-[1.6rem] bg-bodyBgColor dark:bg-bodyBgColor-dark text-primary dark:text-primary-dark cursor-default">
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
