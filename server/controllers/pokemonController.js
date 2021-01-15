const PokemonModel = require("../models/Pokemon");
class PokemonController {
  static async addToMyPokemon(req, res) {
    try {
      const dataFromDB = await PokemonModel.getAll();
      let checkAvalaibility = 0;

      dataFromDB.forEach((result) => {
        if (result.data().name === req.body.name) {
          checkAvalaibility += 1;
        }
      });
      if (checkAvalaibility !== 0) {
        return res
          .status(404)
          .json({ message: "this name has been registered before" });
      } else if (!req.body.name) {
        return res.status(400).json({ message: "name cannot empty!" });
      } else if (!req.body.pokemonName) {
        return res.status(400).json({ message: "pokemon name cannot empty!" });
      } else if (!req.body.imageUrl) {
        return res.status(400).json({ message: "image cannot empty!" });
      }
      {
        await PokemonModel.addPokemon(req.body, req.body.name);
        return res.status(201).json({ message: req.body });
      }
    } catch (err) {
      return res.status(500).json({ message: req.body });
    }
  }

  static async readMyPokemon(req, res) {
    try {
      const dataFromDB = await PokemonModel.getAll();
      const data = [];
      dataFromDB.forEach((result) => {
        data.push(result.data());
      });
      return res.status(200).json({ message: data });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async deleteMyPokemon(req, res) {
    try {
      let params = req.params.pokemon;

      await PokemonModel.deletePokemon(params);
      return res.status(200).json({ message: "success delete pokemon" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = PokemonController;
