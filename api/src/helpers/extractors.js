


// Extrae solo los datos que quiero del videojuego 
const extractVideogames = (APIResults) => {
  const videojuegos = APIResults.map( game => {
    const {id, name, background_image, platforms} = game
    
    const misPLatforms = platforms.map(p => p.platform.name)
    
    return {id, name, platforms: misPLatforms, image: background_image}
  })

  return videojuegos
}


const extractVideogamesDetail = (APIvideogame) => {
  const {id, name, background_image,  description, released, rating, platforms, genres} = APIvideogame

  const myPLatforms = platforms.map(p => p.platform.name)
  const myGenres = genres.map( g => g.slug)

  return {id, name, image: background_image,  description, released, rating, platforms: myPLatforms, genres: myGenres}

}


const extractGenres = (APIResults) => {
  const genres = APIResults.map(genre => {
    return {// los id de los generos en la API no son correlativos
      name: genre.slug,
    }
  })

  return genres
}


const extractPropsOfVideogameDB = (videogameDB) => {
  return {
    id: videogameDB.id,
    name: videogameDB.name,
    platforms: videogameDB.platforms,
    image: videogameDB.image,
    released: videogameDB.released,
    rating: videogameDB.rating,
    description: videogameDB.description,
    genres: videogameDB.genres.map( g => g.name)
  }

}


module.exports = {
  extractVideogames,
  extractVideogamesDetail,
  extractGenres,
  extractPropsOfVideogameDB
}