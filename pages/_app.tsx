import { StyledThemeProvider } from "@definitions/styled-components";
import store from "@redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StyledThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
