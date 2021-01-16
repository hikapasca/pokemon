const request = require("supertest");
const { sequelize } = require("../models");
const { queryInterface } = sequelize;
var server;

beforeEach(function () {
  server = require("../app");
});

afterEach(function () {
  server.close();
});

beforeAll(async (done) => {
  try {
    await queryInterface.bulkInsert("MyPokemons", [
      {
        name: "Grass",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "ivysaur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flower",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "ivysaur",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    done();
  } catch (err) {
    done(err);
  }
});

afterAll(async (done) => {
  try {
    await queryInterface.bulkDelete("MyPokemons", {});
    done();
  } catch (err) {
    done(err);
  }
});

describe("my pokemon route = (/)", () => {
  test("201 sucess add my pokemon", async (done) => {
    try {
      const newMyPokemon = {
        name: "CutePokemon",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "ivysaur",
      };
      const response = await request(server).post("/").send(newMyPokemon);
      const { body, status } = response;
      expect(status).toBe(201);
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("imageUrl");
      expect(body).toHaveProperty("pokemonName");
      done();
    } catch (err) {
      done(err);
    }
  });
  test("400 failed add my pokemon - empty name", async (done) => {
    try {
      const newMyPokemon = {
        name: "",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "ivysaur",
      };
      const response = await request(server).post("/").send(newMyPokemon);
      const { body, status } = response;
      expect(status).toBe(400);
      expect(body).toHaveProperty("message", "name cannot empty!");
      done();
    } catch (err) {
      done(err);
    }
  });

  test("400 failed add my pokemon - empty image url", async (done) => {
    try {
      const newMyPokemon = {
        name: "CutePokemon",
        imageUrl: "",
        pokemonName: "ivysaur",
      };
      const response = await request(server).post("/").send(newMyPokemon);
      const { body, status } = response;
      expect(status).toBe(400);
      expect(body).toHaveProperty("message", "imageUrl cannot empty!");
      done();
    } catch (err) {
      done(err);
    }
  });

  test("400 failed add my pokemon - empty pokemon name", async (done) => {
    try {
      const newMyPokemon = {
        name: "CutePokemon",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "",
      };
      const response = await request(server).post("/").send(newMyPokemon);
      const { body, status } = response;
      expect(status).toBe(400);
      expect(body).toHaveProperty("message", "pokemonName cannot empty!");
      done();
    } catch (err) {
      done(err);
    }
  });

  test("400 failed add my pokemon - name has been registered before", async (done) => {
    try {
      const newMyPokemon = {
        name: "Grass",
        imageUrl:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        pokemonName: "",
      };
      const response = await request(server).post("/").send(newMyPokemon);
      const { body, status } = response;
      expect(status).toBe(400);
      expect(body).toHaveProperty("message", "pokemonName cannot empty!");
      done();
    } catch (err) {
      done(err);
    }
  });

  test("200 success read my pokemons", async (done) => {
    try {
      const response = await request(server).get("/");
      const { body, status } = response;
      expect(status).toBe(200);
      expect(body).toEqual(expect.any(Array));
      done();
    } catch (err) {
      done(err);
    }
  });

  test("200 success delete my pokemon", async (done) => {
    try {
      const params = "Grass";
      const response = await request(server).delete(`/${params}`);
      const { body, status } = response;
      expect(status).toBe(200);
      expect(body).toHaveProperty("message", "success delete");
      done();
    } catch (err) {
      done(err);
    }
  });

  test("404 failed delete my pokemon", async (done) => {
    try {
      const params = "chuchu";
      const response = await request(server).delete(`/${params}`);
      const { body, status } = response;
      expect(status).toBe(404);
      expect(body).toHaveProperty("message", "data not found");
      done();
    } catch (err) {
      done(err);
    }
  });
});
