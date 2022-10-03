import { css, Global } from "@emotion/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Global
        styles={css({
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "Source Sans Pro, s",
          },
        })}
      />
    </>
  );
};

export default App;
