import Head from 'next/head';

import AppContainer from '../src/components/AppContainer';
import Navbar from '../src/components/Navbar';
import Content from '../src/components/Content';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/ca7edc1854.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Navbar />
      <Content />
    </>
  );
}
