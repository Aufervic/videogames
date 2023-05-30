const {Router} = require('express')
const {getAllGenresHandler} = require('../handlers/genreHandlers')


const routerGenre = Router()

routerGenre.get('/', getAllGenresHandler)

module.exports = routerGenre