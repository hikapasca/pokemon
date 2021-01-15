import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import myPokemonReducer from "./reducer/myPokemonReducer";

const reducers = combineReducers({
  myPokemonReducer,
});
const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, middlewares);

export default store;
