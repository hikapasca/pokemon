import React from "react";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { GET_POKEMONS } from "../graphql/graphql";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const gqlVariables = {
  limit: 100,
  offset: 1,
};

const PokemonList = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  const card = () => {
    return css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      float: left;
      text-align: center;
      width: ${windowWidth / 6 - 3}px;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    `;
  };

  const container = () => {
    return css``;
  };
  const row = () => {};

  const column = () => {};

  //   if (loading) return "Loading...";
  //   if (error) return `Error! ${error.message}`;
  return (
    <div style={{ marginTop: "100px" }} className={container()}>
      {loading && <h2>sdsd</h2>}
      {data &&
        data.pokemons.results.map((result, idx) => (
          <div className={card()}>
            <img src={result.image} alt="image-card" />
            <div className="containerCard">
              <h2>{result.name}</h2>
            </div>
          </div>
        ))}
    </div>
  );
  if (data) {
    return;
  }
};

export default PokemonList;
