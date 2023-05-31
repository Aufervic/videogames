require('dotenv').config()
const axios = require('axios')
const {extractVideogames} = require('../../helpers/extractors')
const {Videogame} = require('../../db')

const { API_URL, API_KEY } = process.env;

const getVideogamesByName = async (name) => {// san andreas, san antonio
  // buscamos en la BD
  const videogamesDB = await Videogame.findAll({ where: { name }, attributes: ['id', 'name', 'platforms', 'image']})

  if(videogamesDB.length) return videogamesDB

  // traer de la api  por nombre
  const {data} = await axios(`${API_URL}?search={${name}}&key=${API_KEY}`)
  const videogames = extractVideogames(data.results)

  return videogames
}

module.exports = getVideogamesByName