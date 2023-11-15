import type { AppProps } from 'next/app';
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
  const CustomComponent = Component as any;
  return (
    <ChakraProvider theme={customTheme}>
      <CustomComponent {...pageProps} />
    </ChakraProvider>
  );
};
export default MyApp;
