const { MyPokemon } = require("../models");
class PokemonController {
  static async addToMyPokemon(req, res, next) {
    try {
      const result = await MyPokemon.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  }

  static async readMyPokemon(req, res, next) {
    try {
      const result = await MyPokemon.findAll();
      return res.status(200).json(result);
    } catch (err) {}
  }

  static async deleteMyPokemon(req, res, next) {
    try {
      let param = req.params.pokemon;

      const result = await MyPokemon.destroy({
        where: { name: param },
        returning: true,
      });

      if (!result) {
        throw { name: "data not found" };
      } else {
        return res.status(200).json({ message: "success delete" });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PokemonController;
