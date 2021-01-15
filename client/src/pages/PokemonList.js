import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { GET_POKEMONS } from "../graphql/graphql";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../component/CardsPokemonList";
import { getMyPokemon } from "../store/actions/myPokemonAction";

const gqlVariables = {
  limit: 100,
  offset: 1,
};

const PokemonList = () => {
  const dispatch = useDispatch();
  const myPokemonData = useSelector(
    (state) => state.myPokemonReducer.myPokemon
  );

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  useEffect(() => {
    dispatch(getMyPokemon());
  }, [dispatch]);

  const setCount = () => {
    const copyData = [];
    if (data) {
      for (let i = 0; i < data.pokemons.results.length; i++) {
        copyData.push({
          pokemonName: data.pokemons.results[i].name,
          image: data.pokemons.results[i].image,
          count: 0,
        });
      }

      for (let i = 0; i < copyData.length; i++) {
        for (let j = 0; j < myPokemonData.length; j++) {
          if (myPokemonData[j].pokemonName === copyData[i].pokemonName) {
            copyData[i].count += 1;
          }
        }
      }
    }
    return copyData;
  };
  loading && console.log(loading, "Cekcekcekloading");
  error && console.log(error, "ini eerror");
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  return (
    <div style={{ marginTop: "100px" }}>
      {loading && <h2>sdsd</h2>}

      {data &&
        setCount().map((result, idx) => (
          <Cards dataPokemon={result} key={idx} />
        ))}
    </div>
  );
};

export default PokemonList;
