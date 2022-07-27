import {Router} from "express"
import { muestraGet, muestaGetId, muestraPost } from "../controllers/muestra"
import { check } from "express-validator"
import { validarCampos } from "../middleware/validar-campos"

const router =new Router()

router.get('/',[
    validarCampos
],muestraGet)

router.get('/:id',[
    check('id').isMongoId(),
    validarCampos
],muestaGetId)

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