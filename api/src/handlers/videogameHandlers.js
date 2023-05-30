const {getAllVideogames,
  getVideogameByName,
  getVideogameByID,
  createVideogame
} = require('../controllers/videogameControllers')

const getAllVideogamesHandler = async (req, res) => {
  const videogames = await getAllVideogames()
  res.status(200).json(videogames)
}

const getVideogameByNameHandler = (req, res) => {
  const {name} = req.query
  getVideogameByName(name)
  res.status(200).json({message: 'Devolver el videojuego por nombre:' +name})
}


const getVideogameByIDHandler = (req, res) => {
  const {idVideogame} = req.params
  getVideogameByID()
  res.status(200).json({message: 'Devolver el videojuego con ID: '+idVideogame})
}


const createVideogameHandler = (req, res) => {
  const {videogame} = req.body
  createVideogame()
  res.status(200).json({message: 'Crear videojuego ', videogame: videogame})
}


module.exports = {
  getAllVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIDHandler,
  createVideogameHandler
}