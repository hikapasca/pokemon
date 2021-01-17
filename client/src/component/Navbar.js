import pokemonLogo from "../asset/pokemon-logo.png";
import pokemonListIcon from "../asset/icon-pokemonlist.png";
import myPokemonIcon from "../asset/icon-mypokemon.png";
import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  ulStyle,
  liLogostyle,
  liStyle,
  liItemStyle,
  aItemStyle,
} from "../style/NavbarStyle";

const NavbarComponent = () => {
  const history = useHistory();

  const moveToPokemonList = () => {
    history.push("/");
  };

  const moveToMyPokemon = () => {
    history.push("/mypokemon");
  };

  return (
    <nav>
      <ul className={ulStyle()}>
        <li className={liLogostyle()}>
          <NavLink to="/">
            <img src={pokemonLogo} alt="pokemonLogo" />
          </NavLink>
        </li>

        <li className={liStyle()}>
          <div className={liItemStyle()} onClick={() => moveToMyPokemon()}>
            <img src={myPokemonIcon} alt="myPokemonIcon" />
            <br />
            <a href="/mypokemon" className={aItemStyle()}>
              My Pokemon
            </a>
          </div>
        </li>
        <li className={liStyle()}>
          <div className={liItemStyle()} onClick={() => moveToPokemonList()}>
            <img src={pokemonListIcon} alt="pokemonListIcon" />
            <br />
            <a href="/" className={aItemStyle()}>
              Pokemon List
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
