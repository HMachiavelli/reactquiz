/* eslint-disable no-shadow */
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const { theme } = db;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText}
  }
  html,body {
    min-height: 100vh;
  }
  #__next{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Breaking Bad Quiz</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <meta name="title" content="Breaking Bad Quiz" />
        <meta name="description" content="Let's see if you have watched all 5 seasons from Breaking Bad!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reactquiz.hmachiavelli.vercel.app/" />
        <meta property="og:title" content="Breaking Bad Quiz" />
        <meta property="og:description" content="Let's see if you have watched all 5 seasons from Breaking Bad!" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://reactquiz.hmachiavelli.vercel.app/" />
        <meta property="twitter:title" content="Breaking Bad Quiz" />
        <meta property="twitter:description" content="Let's see if you have watched all 5 seasons from Breaking Bad!" />
        <meta property="twitter:image" content={db.bg} />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
