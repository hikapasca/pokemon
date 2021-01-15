const db = require("../config/firebaseSetup");
const pokemonCollection = db.collection("Pokemon");

class Pokemon {
  static getAll() {
    return pokemonCollection.get();
  }
  static getOne(id) {
    return pokemonCollection.doc(id).get();
  }
  static addPokemon(newData, id) {
    return pokemonCollection.doc(id).set(newData);
  }
  static deletePokemon(id) {
    return pokemonCollection.doc(id).delete();
  }
}

module.exports = Pokemon;
