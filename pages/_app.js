import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
