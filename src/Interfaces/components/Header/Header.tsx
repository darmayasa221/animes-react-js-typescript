import styled from "@emotion/styled";
import React from "react";
import Navbar from "./Navbar";

const HeaderMain = styled.header({
  position: "sticky",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  background: "#F5F5F5",
});

const Header = () => {
  return (
    <HeaderMain>
      <Navbar />
    </HeaderMain>
  );
};

export default Header;
