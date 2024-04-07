import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import Layout from './layout';

import './styles/global/globals.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
