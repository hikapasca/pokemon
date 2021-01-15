export const getMyPokemon = () => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/`)
      .then((resp) => {
        return resp.json();
      })
      .then(({ message }) => {
        dispatch({
          type: "SET_MY_POKEMON",
          payload: message,
        });
      })
      .catch((err) => {
        console.log("apakah error", err);
      });
  };
};

export const deleteMyPokemon = (pokemonId) => {
  return (dispatch, getState) => {
    fetch(`http://localhost:3000/${pokemonId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw resp;
        }
      })
      .then((result) => {
        dispatch({
          type: "DELETE_MY_POKEMON",
          payload: pokemonId,
        });
      })
      .catch((err) => {
        console.log(err, "ini error");
      });
  };
};
