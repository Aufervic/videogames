require('dotenv').config();
const axios = require('axios')

const { API_URL, API_KEY } = process.env;


// Extrae solo los datos que quiero del videojuego 
const extractVideogame = (APIResults) => {
  const videojuegos = APIResults.map( game => {
    const {id, name, background_image,  description, released, rating, platforms} = game
    
    const misPLatforms = platforms.map(p => p.platform.name)
    
    return {id, name, description, platforms: misPLatforms, image: background_image, released, rating }
  })

  return videojuegos
}


const getAllVideogames = async () => {
  // pedir datos a la api
  const {data} = await axios.get(`${API_URL}?key=${API_KEY}`)
  const videojuegos = extractVideogame(data.results)
  
  // pedir datos a la bd
 
  return videojuegos
}

module.exports = getAllVideogames