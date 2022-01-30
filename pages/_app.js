import { SWRConfig } from 'swr';
import { swrValues } from 'config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../reducers';

import { Layout } from 'Layout';

import 'styles/style.scss';

function MyApp({ Component, pageProps }) {
  const store = createStore(reducers, compose(applyMiddleware(thunk)));

  return (
    <Provider store={store}>
      <SWRConfig values={swrValues}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
