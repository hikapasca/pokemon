const initialState = { myPokemon: [] };

function myPokemonReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MY_POKEMON":
      return {
        ...state,
        myPokemon: action.payload,
      };
    case "ADD_MY_POKEMON":
      return {
        ...state,
        myPokemon: state.myPokemon.concat(action.payload),
      };
    case "DELETE_MY_POKEMON":
      return {
        ...state,
        myPokemon: state.myPokemon.filter(
          (data) => data.username !== action.payload
        ),
      };
    default:
      return state;
  }
}

export default myPokemonReducer;
