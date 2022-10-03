import App from "@Interface/App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Animes from "@Interface/components/Animes/Animes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Animes />,
      },
    ],
  },
]);

export default routes;
