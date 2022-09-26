import { css, Global } from "@emotion/react";
import React from "react";
const App = () => {
  return (
    <>
      <div className="container">
        <h1>learn react</h1>
      </div>
      <Global
        styles={css({
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "Source Sans Pro, s",
          },
          ".container": {
            background: "black",
            zIndex: 1,
            width: "100%",
            maxWidth: "1300px",
            marginRight: "auto",
            marginLeft: "auto",
            paddingRight: "auto",
            paddingLeft: "auto",
          },
        })}
      />
    </>
  );
};

export default App;
