import styled from "@emotion/styled";
import React, { FC } from "react";
import { IoIosBook } from "react-icons/io";
import { Link } from "react-router-dom";
import link from "../globalStyle/link";
import responsive from "../globalStyle/resposive";

type NavbarMenuProps = {
  visible?: boolean;
};
const NavMenu = styled.ul<NavbarMenuProps>(({ visible }) => ({
  [responsive[1] as string]: {
    opacity: visible ? 1 : 0,
    display: "flex",
    background: "#F5F5F5",
    top: 0,
    left: visible ? 0 : "-100%",
    position: "absolute",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.4s ease",
  },
}));
const NavListMenu = styled.li({
  listStyle: "none",
  paddingLeft: "1.5rem",
  [responsive[1] as string]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 1.5rem",
  },
});
const NavLinkItem = styled(Link)(link, {
  display: "flex",
  alignItems: "center",
  ":hover": {
    transition: "all 0.2s ease",
    borderTop: "1px solid black",
    borderBottom: "1px solid black",
    padding: "10px 0",
  },
  [responsive[1] as string]: {
    width: "100%",
    justifyContent: "center",
  },
});
const NavIcon = styled(IoIosBook)({
  fontSize: "2rem",
  marginLeft: "5px",
  transition: "all 0.2s ease-out",
  ":hover": {
    transform: "scale(1.05)",
  },
});
const NavBulkNumber = styled.p({
  position: "relative",
  right: "12px",
  top: "-9px",
  background: "red",
  borderRadius: "100%",
  padding: "2px 5px",
  outline: "none",
  fontSize: "0.9rem",
  lineHeight: "1rem",
});
const NavbarMenu: FC<NavbarMenuProps> = ({ visible }) => {
  return (
    <>
      <NavMenu visible={visible}>
        <NavListMenu>
          <NavLinkItem to={"/"}>
            Collections
            <NavIcon />
            <NavBulkNumber>1</NavBulkNumber>
          </NavLinkItem>
        </NavListMenu>
      </NavMenu>
    </>
  );
};
export default NavbarMenu;
