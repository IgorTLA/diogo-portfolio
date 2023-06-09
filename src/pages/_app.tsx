import { AppProps } from 'next/app';
import React from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
});

// function App({ Component, pageProps }: AppProps): React.ReactNode {
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
