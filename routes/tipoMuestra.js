import { Router } from "express";
import { tipoMuestraGet, tipoMuestraGetId, tipoMuestraPost, tipoMuestraPut, tipoMuestraPutActive,tipoMuestraPutDeActiv } from "../controllers/tipoMuestra.js";
import {check} from "express-validator"
import { validarCampos } from "../middleware/validar-campos.js";
import { helpersTipoMuestra } from "../helpers/tipoMuestra.js";

const router = new Router()

router.get('/',tipoMuestraGet)
router.get('/:id',[
    check('id').isMongoId(),
    validarCampos
],tipoMuestraGetId)

router.post('/',[
    check('codigo', 'El campo es obligatorio').not().isEmpty(),
    check('descripcion', 'El campo es obligatorio').not().isEmpty(),
    validarCampos
],tipoMuestraPost)

router.put(':/:id',[
    check('id').isMongoId(),
    validarCampos
],tipoMuestraPut)

router.put('/activar/:id',[
    check('id').isMongoId(),
    check('id').custom(helpersTipoMuestra.existeTipoMuestraById),
    validarCampos
],tipoMuestraPutActive)

router.put('/desactivar/:id',[
    check('id').isMongoId(),
    check('id').custom(helpersTipoMuestra.existeTipoMuestraById),
    validarCampos
],tipoMuestraPutDeActiv)


export default router