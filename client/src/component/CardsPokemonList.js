import React, { useEffect } from "react";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";

const windowWidth = window.innerWidth;

const Cards = ({ dataPokemon }) => {
  const history = useHistory();
  const moveToPokemonDetail = () => {
    history.push(`/detail/${dataPokemon.pokemonName}`);
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
      <img src={dataPokemon.image} alt="pokemon-poster" />
      <div className="containerCard">
        <h2>{dataPokemon.name}</h2>
        <p>Jumlah: {dataPokemon.count}</p>
      </div>
    </div>
  );
};

export default Cards;
