const getAllGenres = require('../controllers/getAllGenres')

const getAllGenresHandler = async (req, res) => {
  const genres = await getAllGenres()
  
  res.status(200).json(genres)
}


module.exports = {
  getAllGenresHandler,
}