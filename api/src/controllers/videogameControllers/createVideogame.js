

const  {Videogame, Genre} = require('../../db')


const createVideogame = async (newGame) => {
  const newVideogame = await Videogame.create(newGame)
  await newVideogame.addGenres(newGame.genres)

  const createdVideogame = await Videogame.findByPk(
    newVideogame.id, {
      include: {
        model: Genre,
        // attributes: ['name'],
        through: {
          attributes: []
        }
      }
    })
  
  return createdVideogame
  // return newVideogame.toJSON()
}

module.exports = createVideogame