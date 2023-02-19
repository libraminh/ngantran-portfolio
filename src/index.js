import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContextProvider from "./contexts/ThemeContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

reportWebVitals();
