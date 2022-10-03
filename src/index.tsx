import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import routes from "@Interface/controller/routes";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ApolloProvider client={client}>
    <RouterProvider router={routes} />
  </ApolloProvider>,
);
