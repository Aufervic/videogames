require('dotenv').config()
const axios = require('axios')
const {extractGenres} = require('../helpers/extractors')
const {Genre} = require('../db')

const {API_URL_GENRES, API_KEY} = process.env

const getAllGenres = async () => {
  let genres = await Genre.findAll()

  if(genres.length) return genres

  // no hay datos en la BD
  // pedir a la API
  const {data} = await axios(`${API_URL_GENRES}?key=${API_KEY}`)
  genres = extractGenres(data.results)

  // guardar en la Base de Datos
  genres = await Genre.bulkCreate(genres)

  return genres
}

module.exports = getAllGenres








