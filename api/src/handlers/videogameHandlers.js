const {getAllVideogames,
  getVideogamesByName,
  getVideogameByID,
  createVideogame
} = require('../controllers/videogameControllers')

const getAllVideogamesHandler = async (req, res) => {
  const videogames = await getAllVideogames()
  res.status(200).json(videogames)
}

const getVideogameByNameHandler = async (req, res) => {
  const {name} = req.query
  const videogames = await getVideogamesByName(name)
  res.status(200).json(videogames)
}


const getVideogameByIDHandler = async (req, res) => {
  const {idVideogame} = req.params
  const videogame = await getVideogameByID(idVideogame)
  res.status(200).json(videogame)
}


const createVideogameHandler = async (req, res) => {
  const newGame = req.body
  const createdGame = await createVideogame(newGame)
  
  res.status(200).json(createdGame)
}


module.exports = {
  getAllVideogamesHandler,
  getVideogameByNameHandler,
  getVideogameByIDHandler,
  createVideogameHandler
}