require('dotenv').config();
const axios = require('axios')
const {Videogame} = require('../../db')

const {extractVideogames} = require('../../helpers/extractors')

const { API_URL, API_KEY } = process.env;


const getAllVideogames = async () => {
  // pedir datos a la api
  const {data} = await axios.get(`${API_URL}?key=${API_KEY}`)
  const videogamesAPI = extractVideogames(data.results)
  
  // pedir datos a la bd
  const videogamesDB = await Videogame.findAll({
    attributes: ['id', 'name', 'platforms', 'image']
  })

  return videogamesDB.reverse().concat(videogamesAPI)
}

module.exports = getAllVideogames