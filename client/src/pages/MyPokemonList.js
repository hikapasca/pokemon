import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../component/CardsMyPokemon";
import { getMyPokemon } from "../store/actions/myPokemonAction";

const MyPokemonList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.myPokemonReducer.myPokemon);

  useEffect(() => {
    dispatch(getMyPokemon());
  }, [dispatch]);

  return (
    <div>
      {data &&
        data.map((dataMyPokemon, idx) => (
          <div key={idx}>
            <Cards dataMyPokemon={dataMyPokemon} />
          </div>
        ))}
    </div>
  );
};

export default MyPokemonList;
