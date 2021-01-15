const routes = require("express").Router();
const PokemonController = require("../controllers/pokemonController");

routes.get("/", PokemonController.readMyPokemon);
// routes.get("/pokemon", PokemonController.getTotalPokemon);
routes.post("/", PokemonController.addToMyPokemon);
routes.delete("/:pokemon", PokemonController.deleteMyPokemon);

module.exports = routes;
