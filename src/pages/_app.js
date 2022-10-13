import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="/img/avatar.svg" />
          <meta httpEquiv="Content-type" content="text/html; charset=UTF-8" />
          <meta name="application-name" content="Feedorama" />
          <meta name="description" content="Feedorama Sistema Web" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <title>Feedorama Web Application</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}