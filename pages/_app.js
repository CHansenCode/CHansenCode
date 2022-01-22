import { SWRConfig } from 'swr';
import { swrValues } from 'config';

import { Layout } from 'Layout';

import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig values={swrValues}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
