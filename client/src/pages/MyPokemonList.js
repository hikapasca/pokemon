import React, { useEffect } from "react";
import { cards, cardsContainer } from "../style/MyPokemonListStyle";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../component/CardsMyPokemon";
import EmptyPokemon from "../component/EmptyPokemon";
import { getMyPokemon } from "../store/actions/myPokemonAction";

const MyPokemonList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myPokemonReducer.myPokemon);

  useEffect(() => {
    dispatch(getMyPokemon());
  }, [dispatch]);

  return (
    <div>
      {data.length === 0 && <EmptyPokemon />}
      {data && (
        <div className={cardsContainer()}>
          <div className={cards()}>
            {data.map((dataMyPokemon, idx) => (
              <div key={idx}>
                <Cards dataMyPokemon={dataMyPokemon} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPokemonList;
