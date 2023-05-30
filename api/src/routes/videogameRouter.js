const e = require("express");
const { Router } = require("express");
const {
  getAllVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIDHandler,
  createVideogameHandler,
} = require("../handlers/videogameHandlers");

const routerVideogame = Router();

// http://localhost:3001/videogames/

routerVideogame.get("/", getAllVideogamesHandler);

// ?name=Sami
routerVideogame.get("/name", getVideogameByNameHandler);

routerVideogame.get("/:idVideogame", getVideogameByIDHandler);

routerVideogame.post("/", createVideogameHandler);

module.exports = routerVideogame;
