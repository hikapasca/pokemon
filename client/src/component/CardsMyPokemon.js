import React from "react";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";
const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;

const Cards = ({ dataMyPokemon }) => {
  const history = useHistory();
  const moveToPokemonDetail = () => {
    console.log("cekcekcek");
    history.push(`/detail/${dataMyPokemon.name}`);
  };
  const card = () => {
    return css`
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      transition: 0.3s;
      cursor: pointer;
      float: left;
      text-align: center;
      width: ${windowWidth / 6 - 3}px;
      &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
    `;
  };

  return (
    <div className={card()} onClick={() => moveToPokemonDetail()}>
      <img src={dataMyPokemon.imageUrl} alt="pokemon-poster" />
      <div className="containerCard">
        <h2>{dataMyPokemon.name}</h2>

        <h2>{dataMyPokemon.pokemonName}</h2>
      </div>
    </div>
  );
};

export default Cards;
