import { AppProps } from 'next/app';
import React from 'react';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';

// function App({ Component, pageProps }: AppProps): React.ReactNode {
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
