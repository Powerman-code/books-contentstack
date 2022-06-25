import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import "./index.css";

// const GRAPHQL_ENDPOINT = `https://graphql.contentstack.com/stacks/${process.env.REACT_APP_APIKEY}?environment=${process.env.REACT_APP_ENVIRONMENT}`;

console.log(process.env);

// const httpLink = new HttpLink({
//   uri: GRAPHQL_ENDPOINT,
//   headers: {
//     access_token: process.env.REACT_APP_DELIVERY_TOKEN,
//   },
// });

const client = new ApolloClient({
  // link: httpLink,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
