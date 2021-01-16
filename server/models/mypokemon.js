"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyPokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MyPokemon.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "name cannot empty",
          },
          notEmpty: {
            args: true,
            msg: "name cannot empty!",
          },
          async checkName(name) {
            const check = await MyPokemon.findOne({ where: { name } });
            if (check) {
              throw new Error("This name has been registered");
            }
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "imageUrl cannot empty",
          },
          notEmpty: {
            args: true,
            msg: "imageUrl cannot empty!",
          },
        },
      },
      pokemonName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "pokemonName cannot empty",
          },
          notEmpty: {
            args: true,
            msg: "pokemonName cannot empty!",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "MyPokemon",
    }
  );
  return MyPokemon;
};
