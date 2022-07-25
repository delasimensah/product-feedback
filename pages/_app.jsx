import { useState, useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";
import theme from "../utils/theme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <>
      <Head>
        <title>Product Feedback</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default MyApp;
