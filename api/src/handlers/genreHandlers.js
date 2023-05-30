const getAllGenres = require('../controllers/getAllGenres')

const getAllGenresHandler = (req, res) => {
  res.status(200).json({message: 'Devolver los géneros'})
}


module.exports = {
  getAllGenresHandler,
}