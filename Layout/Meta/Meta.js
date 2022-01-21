import Head from 'next/head';

import { metaData } from 'config';

export function Meta() {
  return (
    <Head>
      <title>{metaData.title}</title>
      <meta name="description" content={metaData.descr} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
