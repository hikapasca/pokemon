import { css } from "@emotion/css";
import pokemonLogo from "../asset/pokemon-logo.png";
import pokemonListIcon from "../asset/icon-pokemonlist.png";
import myPokemonIcon from "../asset/icon-mypokemon.png";
const windowWidth = window.innerWidth;
const NavbarComponent = () => {
  const liStyle = () => {
    return css`
      float: right;
      cursor: pointer;
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
      position: fixed;
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
      <ul className={ulStyle()}>
        <li className={liLogostyle()}>
          <img src={pokemonLogo} alt="pokemonLogo" />
        </li>
        <li className={liStyle()}>
          <div className={liItemStyle()}>
            <img src={myPokemonIcon} alt="myPokemonIcon" />
            <br />
            <a className={aItemStyle()} href="#contact">
              My Pokemon
            </a>
          </div>
        </li>
        <li className={liStyle()}>
          <div className={liItemStyle()}>
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
