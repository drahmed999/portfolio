import { ChakraProvider} from "@chakra-ui/react/dist"

import { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
