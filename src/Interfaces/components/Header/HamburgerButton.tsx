import styled from "@emotion/styled";
import React, { FC, MouseEventHandler } from "react";
import responsive from "../globalStyle/resposive";
type HamburgerButtonProps = {
  visible?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const Button = styled.button<Pick<HamburgerButtonProps, "visible">>(
  ({ visible }) => ({
    display: "none",
    border: "none",
    background: "none",
    cursor: "pointer",
    ":hover": {
      "span:nth-of-type(2)": {
        transform: "translateX(10px)",
        backgroundColor: "gray",
      },
    },
    "span:nth-of-type(1)": {
      transform: visible ? "translate(0px, -2px) rotate(45deg)" : "none",
    },
    "span:nth-of-type(3)": {
      transform: visible ? "translate(-3px, 3px) rotate(-45deg)" : "none",
    },
    "span:nth-of-type(2)": {
      opacity: visible ? 0 : "unset",
      transform: visible ? "translate(-15px)" : "none",
    },
    span: {
      background: "black",
      display: "block",
      width: "33px",
      height: "4px",
      marginBottom: "5px",
      position: "relative",
      transformOrigin: "0 0",
      transition: "0.4s",
      zIndex: 1,
      borderRadius: "6rem",
    },
    [responsive[1] as string]: {
      display: "block",
    },
  }),
);
const HamburgerButton: FC<HamburgerButtonProps> = ({ visible, onClick }) => {
  return (
    <Button type="button" onClick={onClick} visible={visible}>
      <span />
      <span />
      <span />
    </Button>
  );
};

export default HamburgerButton;
