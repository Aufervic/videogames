require('dotenv').config()
const axios = require('axios')
const {extractVideogamesDetail, extractPropsOfVideogameDB} = require('../../helpers/extractors')
const {Videogame, Genre} = require('../../db')

const {API_URL, API_KEY} = process.env



const getVideogameByID = async (id) => {
  if(isNaN(id)){// si no es numerico, busco en la BD
    const videogameDB = await Videogame.findByPk(id, {
      include: {
        model: Genre,
        through: {
          attributes: []
        }
      }
    })
    
    const videogameDBMaped = extractPropsOfVideogameDB (videogameDB)

    return videogameDBMaped
  }

  // busco en la API
  const {data} = await axios(`${API_URL}/${id}?key=${API_KEY}`)
  const videogameAPI = extractVideogamesDetail(data)

  // 
  return videogameAPI
}

module.exports = getVideogameByID
