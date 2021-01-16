import React from "react";
import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyPokemon } from "../store/actions/myPokemonAction";
import Swal from "sweetalert2";
const windowWidth = window.innerWidth;
// const windowHeight = window.innerHeight;

const Cards = ({ dataMyPokemon }) => {
  const history = useHistory();
  const dispatch = useDispatch();
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

  const releaseMe = () => {
    // console.log(dataMyPokemon.name);
    Swal.fire({
      title: "Are you sure want to release this pokemon?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Release Me",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyPokemon(dataMyPokemon.name));
        Swal.fire(`Good Bye ${dataMyPokemon.name}`, "", "success");
      }
    });
  };

  return (
    <div className={card()}>
      <img src={dataMyPokemon.imageUrl} alt="pokemon-poster" />
      <div className="containerCard">
        <h2>{dataMyPokemon.name}</h2>
        <h2>{dataMyPokemon.pokemonName}</h2>
        <button onClick={() => releaseMe()}>Release Me</button>
      </div>
    </div>
  );
};

export default Cards;
