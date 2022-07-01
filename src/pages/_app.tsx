import type { AppProps } from 'next/app';

import 'src/styles/global.css';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
