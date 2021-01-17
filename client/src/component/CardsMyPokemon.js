import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMyPokemon } from "../store/actions/myPokemonAction";
import Swal from "sweetalert2";
import { BsFillTrashFill } from "react-icons/bs";
import alertImage from "../asset/sadface.png";
import goodByeImage from "../asset/goodbye.png";
import {
  cardContentStyle,
  cardImageStyle,
  cardOutermostStyle,
  cardStyle,
  buttonStyle,
} from "../style/CardsMyPokemonStyle";
const Cards = ({ dataMyPokemon }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const moveToPokemonDetail = () => {
    history.push(`/detail/${dataMyPokemon.pokemonName}`);
  };

  const releaseMe = () => {
    Swal.fire({
      title: "Are you sure want to release this pokemon?",
      imageUrl: alertImage,
      imageHeight: 150,
      imageWidth: 150,
      imageAlt: "Sad Face",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Release Me",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteMyPokemon(dataMyPokemon.name));
        Swal.fire({
          imageUrl: goodByeImage,
          imageAlt: "Sad Face",
          title: `Good Bye ${dataMyPokemon.name}`,
        });
      }
    });
  };

  return (
    <div className={cardOutermostStyle()}>
      <div className={cardStyle()}>
        <div onClick={() => moveToPokemonDetail()}>
          <img
            className={cardImageStyle()}
            src={dataMyPokemon.imageUrl}
            alt="pokemon-poster"
          />
        </div>
        <div className={cardContentStyle()}>
          <h2>{dataMyPokemon.name}</h2>
          <p>{dataMyPokemon.pokemonName}</p>
          <button className={buttonStyle()} onClick={() => releaseMe()}>
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
