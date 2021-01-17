import React from "react";
import { useHistory } from "react-router-dom";
import {
  cardContentStyle,
  cardImageStyle,
  cardOutermostStyle,
  cardStyle,
} from "../style/CardsPokemonListStyle";

const Cards = ({ dataPokemon }) => {
  const history = useHistory();
  const moveToPokemonDetail = () => {
    history.push(`/detail/${dataPokemon.pokemonName}`);
  };

  return (
    <div className={cardOutermostStyle()} onClick={() => moveToPokemonDetail()}>
      <div className={cardStyle()}>
        <div>
          <img
            className={cardImageStyle()}
            src={dataPokemon.image}
            alt="pokemon-poster"
          />
        </div>
        <div className={cardContentStyle()}>
          <h2>{dataPokemon.pokemonName}</h2>
          <p>Owned: {dataPokemon.count}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
