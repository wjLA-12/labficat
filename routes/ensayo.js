import { Router } from "express";
import {ensayoGet,ensayoGetId,ensayoPut,ensayoPost,ensayoPutActive,ensayoPutDeActiv}  from "../controllers/ensayo.js";
import {check} from "express-validator"
import { validarCampos } from "../middleware/validar-campos.js";
import { helpersEnsayo } from "../helpers/ensayo.js";

const router = new Router()

router.get('/',ensayoGet)
router.get('/:id',[
    check('id').isMongoId(),
    validarCampos
],ensayoGetId)

router.post('/',[
    check('ensayo', 'El campo es obligatorio').not().isEmpty(),
    check('metodo', 'El campo es obligatorio').not().isEmpty(),
    check('tecnica', 'El campo es obligatorio').not().isEmpty(),
    check('precio', 'El campo es obligatorio').isNumeric(),
    validarCampos
],ensayoPost)

router.put(':/:id',[
    check('id').isMongoId(),
    validarCampos
],ensayoPut)

router.put('/activar/:id',[
    check('id').isMongoId(),
    check('id').custom(helpersEnsayo.existeEnsayoById),
    validarCampos
],ensayoPutActive)

router.put('/desactivar/:id',[
    check('id').isMongoId(),
    check('id').custom(helpersEnsayo.existeEnsayoById),
    validarCampos
],ensayoPutDeActiv)


export default router