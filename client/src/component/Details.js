import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import HappyFaceImage from "../asset/happyface.png";
import UnluckyFaceImage from "../asset/unlucky.png";
import catchMe from "../asset/catchme.png";
import {
  rightItemStyle,
  titleStyle,
  abilitesItemsStyle,
  abilitesStyle,
  hrStyle,
  typesItemStyle,
  typesStyle,
  movesContainerStyle,
  movesItemStyle,
  movesStyle,
  catchPokemonStyle,
  imgCatchMeStyle,
  fontCatchMeStyle,
  detailsContainer,
  leftItemStyle,
  imageStyle,
  verticalLine,
} from "../style/DetailsStyle";
const Detail = ({ pokemon }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const dispatch = useDispatch();
  const param = useParams();
  const catchPokemon = () => {
    let number = Math.random() * 6;
    if (number <= 3) {
      Swal.fire({
        imageUrl: HappyFaceImage,
        imageAlt: "Happy Face",
        title: "Success Catch Pokemon!",
        text: "Lets give him a name!",
        input: "text",
        confirmButtonText: "Save",
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
          return fetch(`https://radiant-coast-03498.herokuapp.com/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              imageUrl,
              name,
              pokemonName: param.pokemon,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({
            type: "ADD_MY_POKEMON",
            payload: result.value,
          });
          Swal.fire({
            imageUrl: HappyFaceImage,
            imageAlt: "Happy Face",
            text: "Success add new pokemon!",
          });
        }
      });
    } else {
      Swal.fire({
        imageUrl: UnluckyFaceImage,
        imageAlt: "Unlucky",
        text: "Failed to catch pokemon!",
        confirmButtonText: "Don't give up!",
      });
    }
  };

  return (
    <div>
      <div className={catchPokemonStyle()} onClick={() => catchPokemon()}>
        <img src={catchMe} className={imgCatchMeStyle()} alt="catch-icon" />
        <h2 className={fontCatchMeStyle()}>Catch Me</h2>
      </div>
      <div className={detailsContainer()}>
        <div className={leftItemStyle()}>
          <img className={imageStyle()} src={imageUrl} alt="pokemon-img" />
          <h1 className={titleStyle()}>{pokemon.name}</h1>
        </div>
        <div className={verticalLine()}></div>
        <div className={rightItemStyle()}>
          <h1 className={titleStyle()}>Abilities</h1>
          <div className={abilitesStyle()}>
            {pokemon.abilities.map((abb, idx) => (
              <div className={abilitesItemsStyle()} key={idx}>
                <p>{abb.ability.name}</p>
              </div>
            ))}
          </div>
          <hr className={hrStyle()} />
          <h1 className={titleStyle()}>Types</h1>
          <div className={typesStyle()}>
            {pokemon.types.map(({ type }, idx) => (
              <div className={typesItemStyle()} key={idx}>
                <p>{type.name}</p>
              </div>
            ))}
          </div>
          <hr className={hrStyle()} />
          <h1 className={titleStyle()}>Moves</h1>
          <div className={movesStyle()}>
            {pokemon.moves.map(({ move }, idx) => (
              <div className={movesContainerStyle()} key={idx}>
                <div className={movesItemStyle()}>
                  <p>{move.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
