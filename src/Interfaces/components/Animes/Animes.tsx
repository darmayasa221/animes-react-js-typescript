import styled from "@emotion/styled";
import React from "react";
import container from "../globalStyle/container";
import Anime from "./Anime";
import { useQuery, gql } from "@apollo/client";
import responsive from "../globalStyle/resposive";
import { IAnimes } from "@Domains/animes/entities/Animes";
const AnimesContainer = styled.div(container, {
  position: "relative",
  background: "none",
  top: "80px",
  paddingTop: "2rem",
});
const AnimesList = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gridAutoRows: "400px",
  gridColumnGap: "0.5rem",
  gridRowGap: "1rem",
  padding: "0 1.5rem",
  [responsive[2] as string]: {
    gridTemplateColumns: "repeat(2,350px)",
    justifyContent: "center",
    gridColumnGap: "1rem",
  },
  [responsive[1] as string]: {
    gridTemplateColumns: "repeat(1,300px)",
    justifyContent: "center",
    gridAutoRows: "500px",
  },
});
const GET_ANIMES = gql`
  {
    Page(perPage: 10) {
      media {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          color
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;
const Animes = () => {
  const { loading, error, data } = useQuery<IAnimes>(GET_ANIMES);
  if (loading) {
    return <p>loading..</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <AnimesContainer>
      <AnimesList>
        {data?.Page.media.map((item) => (
          <Anime
            id={item.id}
            key={item.id}
            coverImage={item.coverImage}
            title={item.title}
          />
        ))}
      </AnimesList>
    </AnimesContainer>
  );
};

export default Animes;
