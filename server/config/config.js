require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "myPokemon",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "myPokemon_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.USERNAME_PRODUCTION,
    password: process.env.PASSWORD_PRODUCTION,
    database: process.env.DATABASE_PRODUCTION,
    host: process.env.HOST_PRODUCTION,
    dialect: "postgres",
  },
};
