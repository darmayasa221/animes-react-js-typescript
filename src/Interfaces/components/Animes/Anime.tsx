import { IAnimed } from "@Domains/animes/entities/Animes";
import styled from "@emotion/styled";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import link from "../globalStyle/link";
import responsive from "../globalStyle/resposive";
type AnimeProps = IAnimed;

const AnimeCover = styled.img({
  width: "100%",
  height: "300px",
  objectFit: "cover",
  [responsive[1] as string]: {
    height: "400px",
  },
});
const AnimeTitleWrapper = styled.div({
  padding: "0 0.5rem",
});
const AnimeTitle = styled.h1({
  fontSize: "15px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  paddingBottom: "0.2rem",
});
const AnimeContainer = styled(Link)(link, {
  borderRadius: "1rem",
  border: "2px solid black",
  display: "block",
  overflow: "hidden",
  background: "white",
  transition: "all 0.2s ease-out",
  ":hover": {
    transform: "scale(1.05)",
    zIndex: 1,
    transition: "all 0.2s ease",
  },
});
const Anime: FC<AnimeProps> = ({ coverImage, title }) => {
  return (
    <>
      <AnimeContainer to={"/"}>
        <AnimeCover src={coverImage.large} alt={coverImage.large} />
        <AnimeTitleWrapper>
          {Object.keys(title).map(
            (titleAnime, index) =>
              index !== 0 && (
                <AnimeTitle key={index}>
                  {titleAnime} : {title[titleAnime]}
                </AnimeTitle>
              ),
          )}
        </AnimeTitleWrapper>
      </AnimeContainer>
    </>
  );
};

export default Anime;
