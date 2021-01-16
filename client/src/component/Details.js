import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const Detail = ({ pokemon }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const dispatch = useDispatch();
  const param = useParams();
  const catchPokemon = () => {
    let number = Math.random() * 6;
    if (number <= 3) {
      Swal.fire({
        icon: "success",
        title: "Success Catch Pokemon!",
        text: "Lets give him a name!",
        input: "text",
        confirmButtonText: "Save",
        showLoaderOnConfirm: true,
        preConfirm: (name) => {
          return fetch(`http://localhost:3000/`, {
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
            icon: "success",
            text: "Success add new pokemon!",
          });
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "Failed to catch pokemon!",
        confirmButtonText: "Don't give up!",
      });
    }
  };
  return (
    <div>
      <button onClick={() => catchPokemon()}>Catch me</button>
      <img src={imageUrl} alt="pokemon-img" />
      <h1>{pokemon.name}</h1>
      <h2>Abilities</h2>
      {pokemon.abilities.map((abb, idx) => (
        <div key={idx}>
          <p>{abb.ability.name}</p>
        </div>
      ))}
      <h2>Types</h2>
      {pokemon.types.map(({ type }, idx) => (
        <div key={idx}>
          <p>{type.name}</p>
        </div>
      ))}
      <h2>Moves</h2>
      {pokemon.moves.map(({ move }, idx) => (
        <div key={idx}>
          <p>{move.name}</p>
        </div>
      ))}
      )}
    </div>
  );
};

export default Detail;
