const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
videogameRouter = require('./videogameRouter.js');
genresRouter = require('./genresRouter.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRouter);
router.use('/genres', genresRouter)

module.exports = router;
