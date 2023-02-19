import { ApolloProvider, useApolloClient } from "@apollo/client";
import ThemeContextProvider from "../contexts/ThemeContext";
import "./index.css";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApolloClient(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
