import Head from 'next/head';

import Header from '../src/components/organisms/Header';
import TimelineContent from '../src/components/organisms/TimelineContent';

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
      </Head>
      <Header />
      <TimelineContent />
    </>
  );
}
