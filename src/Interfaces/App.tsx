import { css, Global } from "@emotion/react";
import React from "react";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <>
      <Header />
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
