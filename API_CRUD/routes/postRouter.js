const express = require ("express")

// controlado
const {traerPosteos,traerUnPosteo,crearPosteo,actualizarPosteo,borrarPosteo } = require ("../controllers/postControllers.js")

/* rutas */
const router = express.Router()

router.get ("/" ,traerPosteos)
router.get ("/:id",traerUnPosteo )
router.post ("/", crearPosteo)
 router.put ("/:id", actualizarPosteo)
router.delete ("/:id", borrarPosteo) 

module.exports = router