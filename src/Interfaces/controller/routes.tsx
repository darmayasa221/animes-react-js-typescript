import App from "@Interface/App";
import { createBrowserRouter } from "react-router-dom";
import React from "react";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default routes;
