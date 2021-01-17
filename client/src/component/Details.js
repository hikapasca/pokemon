import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { css } from "@emotion/css";
import HappyFaceImage from "../asset/happyface.png";
import UnluckyFaceImage from "../asset/unlucky.png";
import catchMe from "../asset/catchme.png";
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

  const detailsContainer = () => {
    return css`
      display: flex;
      justifiy-content: center;
      border-syle: solid;
      border-width: 100px;
      @media (max-width: 750px) {
        display: block;
      }
    `;
  };

  const imageStyle = () => {
    return css`
      width: 300px;
      height: 300px;
      @media (max-width: 300px) {
        width: 150px;
        height: 150px;
      }
    `;
  };

  const abilitesStyle = () => {
    return css`
      display: flex;
      justify-content: start;
      flex-flow: row wrap;
    `;
  };

  const abilitesItemsStyle = () => {
    return css`
      padding: 5px;
      border-radius: 20px;
      margin-right: 10px;
      align-items: center;
      box-shadow: #006678 0px 0px 3px 0px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      max-width: 192px;
      overflow: hidden;
      &:hover {
        box-shadow: #006678 0px 0px 7px 0px;
      }
    `;
  };

  const typesStyle = () => {
    return css`
      display: flex;
      justify-content: start;
      flex-flow: row wrap;
    `;
  };

  const typesItemStyle = () => {
    return css`
      padding: 5px;
      border-radius: 20px;
      margin-right: 10px;
      align-items: center;
      box-shadow: #006678 0px 0px 3px 0px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      max-width: 192px;
      overflow: hidden;
      &:hover {
        box-shadow: #006678 0px 0px 7px 0px;
      }
    `;
  };
  const movesStyle = () => {
    return css`
      display: flex;
      justify-content: start;
      flex-flow: row wrap;
    `;
  };

  const movesItemStyle = () => {
    return css`
      padding: 5px;
      border-radius: 20px;
      margin-right: 10px;
      align-items: center;
      box-shadow: #006678 0px 0px 3px 0px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      max-width: 192px;
      overflow: hidden;
      &:hover {
        box-shadow: #006678 0px 0px 7px 0px;
      }
    `;
  };

  const movesContainerStyle = () => {
    return css`
      height: auto;
      display: flex;
      margin: 10px;
    `;
  };
  const leftItemStyle = () => {
    return css`
      margin-left: 80px;
      margin-right: 80px;
      @media (max-width: 475px) {
        margin-left: 40px;
        margin-right: 40px;
      }
      @media (max-width: 380px) {
        margin-left: 0px;
        margin-right: 0px;
      }
    `;
  };

  const rightItemStyle = () => {
    return css`
      text-align: left;
      @media (max-width: 750px) {
        padding: 30px;
      }
    `;
  };

  const titleStyle = () => {
    return css`
      font-size: 40px;
      @media (max-width: 360px) {
        font-size: 30px;
      }
    `;
  };

  const hrStyle = () => {
    return css`
      margin-top: 30px;
    `;
  };

  const verticalLine = () => {
    return css`
      border-left: solid grey;
      border-width: 1px;
      margin-right: 20px;
      margin-left: 10px;
    `;
  };

  const catchPokemonStyle = () => {
    return css`
      position: fixed;
      bottom: 0;
      right: 320px;
      cursor: pointer;
      background-color: grey;
      padding: 5px;
      border-radius: 20px;
      align-items: center;
      box-shadow: grey 0px 0px 3px 0px;
      transform: matrix(1, 0, 0, 1, 0, 0);
      overflow: hidden;
      &:hover {
        box-shadow: grey 0px 0px 7px 0px;
      }
      @media (max-width: 750px) {
        right: 20px;
      }
    `;
  };

  const imgCatchMeStyle = () => {
    return css`
      width: 80px;
      height: 80px;
      @media (max-width: 480px) {
        width: 50px;
        height: 50px;
      }
    `;
  };
  const fontCatchMeStyle = () => {
    return css`
      font-size: 24px;
      @media (max-width: 750px) {
        font-size: 20px;
      }
      @media (max-width: 750px) {
        font-size: 18px;
      }
    `;
  };
  return (
    <div>
      <div className={catchPokemonStyle()} onClick={() => catchPokemon()}>
        <img src={catchMe} className={imgCatchMeStyle()} />
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
