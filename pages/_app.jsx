import { MantineProvider } from "@mantine/core";
import theme from "../utils/theme";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
