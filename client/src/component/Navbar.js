import { css } from "@emotion/css";
import pokemonLogo from "../asset/pokemon-logo.png";
import pokemonListIcon from "../asset/icon-pokemonlist.png";
import myPokemonIcon from "../asset/icon-mypokemon.png";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const history = useHistory();

  const [currentUrl, setCurrentUrl] = useState("/");

  const isMobile = useMediaQuery({ query: `(min-width: 700px)` });

  const moveToHome = () => {
    // history.push("/");
  };

  const moveToPokemonList = () => {
    history.push("/");
  };

  const moveToMyPokemon = () => {
    history.push("/mypokemon");
  };
  const liStyle = () => {
    return css`
      float: right;
      cursor: pointer;
    `;
  };

  const displayNone = () => {
    return css`
      display: none;
    `;
  };

  const liLogostyle = () => {
    return css`
      float: left;
      padding: 12px;
      cursor: pointer;
    `;
  };

  const ulStyle = () => {
    return css`
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #006678;
      border-style: none;
      position: sticky;
      top: 0;
      width: 100%;
    `;
  };

  const liItemStyle = () => {
    return css`
      display: block;
      color: white;
      text-align: center;
      padding: 10px 16px;
      text-decoration: none;
      display: block;
      &:hover {
        background-color: #003542;
      }
    `;
  };

  const aItemStyle = () => {
    return css`
      color: white;
      text-decoration: none;
    `;
  };

  return (
    <nav>
      {console.log(currentUrl, "cel")}
      <ul className={ulStyle()}>
        <li className={isMobile ? liLogostyle() : displayNone()}>
          <NavLink to="/">
            <img src={pokemonLogo} alt="pokemonLogo" />
          </NavLink>
        </li>

        <li className={liStyle()}>
          <div className={liItemStyle()} onClick={() => moveToMyPokemon()}>
            <img src={myPokemonIcon} alt="myPokemonIcon" />
            <br />
            <a className={aItemStyle()} href="#contact">
              My Pokemon
            </a>
          </div>
        </li>
        <li className={liStyle()}>
          <div className={liItemStyle()} onClick={() => moveToPokemonList()}>
            <img src={pokemonListIcon} alt="pokemonListIcon" />
            <br />
            <a className={aItemStyle()} href="#contact">
              Pokemon List
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
