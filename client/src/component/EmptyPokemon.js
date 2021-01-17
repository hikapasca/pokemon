import React from "react";
import {
  outermostDivStyle,
  outerDivStyle,
  innverDivStyle,
  h1Style,
  h2Style,
  aStyle,
} from "../style/EmptyPokemonStyle";
const EmptyPokemon = () => {
  return (
    <div className={outermostDivStyle()}>
      <div className={outerDivStyle()}>
        <div className={innverDivStyle()}>
          <h1 className={h1Style()}>Oops!</h1>
          <h2 className={h2Style()}>404 - You have no pokemon! </h2>
        </div>
        <a href="/" className={aStyle()}>
          Go To Pokemon List
        </a>
      </div>
    </div>
  );
};

export default EmptyPokemon;
