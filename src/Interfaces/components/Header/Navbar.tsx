import styled from "@emotion/styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import container from "../globalStyle/container";
import link from "../globalStyle/link";
import HamburgerButton from "./HamburgerButton";
import NavbarMenu from "./NavbarMenu";

const Nav = styled.nav({
  width: "100%",
});
const NavBarLogo = styled(Link)(link, {
  fontFamily: "bold",
});
const NavbarContainer = styled.div(container, {
  maxWidth: "1200px",
  padding: "0 1.5rem",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
const Navbar = () => {
  const [hamburgerButton, setHamburgerButton] = useState<boolean>(false);
  const onClickHamburgerButton = () => {
    hamburgerButton ? setHamburgerButton(false) : setHamburgerButton(true);
  };
  return (
    <Nav>
      <NavbarContainer className="container">
        <NavBarLogo to={"/"}>Animes</NavBarLogo>
        <NavbarMenu visible={hamburgerButton} />
        <HamburgerButton
          onClick={onClickHamburgerButton}
          visible={hamburgerButton}
        />
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
