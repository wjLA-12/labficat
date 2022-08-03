import {Router} from "express"
import { muestraGet, muestraGetId, muestraPost } from "../controllers/muestra.js"
import { check } from "express-validator"
import { validarCampos } from "../middleware/validar-campos.js"

const router =new Router()

router.get('/',[
    validarCampos
],muestraGet)

router.get('/:id',[
    check('id').isMongoId(),
    validarCampos
],muestraGetId)

router.post('/',[
    
    check('municipioRecoleccion', 'El campo es obligatorio').not().isEmpty(),
    check('direccion', 'El campo es obligatorio').not().isEmpty(),
    check('lugar', 'El campo es obligatorio').not().isEmpty(),
    check('recolectadaPor', 'El campo es obligatorio').not().isEmpty(),
    check('tipoMuestra', 'El campo es obligatorio').not().isEmpty(),
    check('matrizMuestra', 'El campo es obligatorio').not().isEmpty(),
    check('fecha', 'El campo es obligatorio').not().isEmpty(),
    check('hora', 'El campo es obligatorio').not().isEmpty(),
    validarCampos

],muestraPost)

export default router