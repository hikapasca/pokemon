import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { cardsContainer, cards } from "../style/PokemonListStyle";
import { GET_POKEMONS } from "../graphql/graphql";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Cards from "../component/CardsPokemonList";
import { getMyPokemon } from "../store/actions/myPokemonAction";
import Loading from "../component/Loading";

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

  if (loading) return <Loading />;
  if (error) return <Redirect to="/" />;
  if (data)
    return (
      <div className={cardsContainer()}>
        <div className={cards()}>
          {data &&
            setCount().map((result, idx) => (
              <Cards dataPokemon={result} key={idx} />
            ))}
        </div>
      </div>
    );
};

export default PokemonList;
