import { Router } from "express"
import { usuarioGet, usuarioGetId, usuarioGetIdent, usuarioPut, usuarioPost, usuarioPutActive, usuarioPutDeActiv, usuarioGetlogin } from "../controllers/usuario.js"
import { validarCampos } from "../middleware/validar-campos.js"
import { check } from "express-validator"
import { helpersUsuario } from "../helpers/usuario.js"
import { validarJWT } from "../middleware/validar-jwt.js"

const router = new Router()

router.get('/', [
    validarCampos,
    validarJWT
], usuarioGet)

router.get('/:id', [
    check('id').isMongoId(),
    validarCampos
], usuarioGetId)

router.get('/cc/nit/:numeroDocumento',[
    
    validarCampos
], usuarioGetIdent)


 router.put('/:id', [
     check('id').isMongoId(),
    validarCampos
 ], usuarioPut)

router.put('/activar/:id', [
    check('id').isMongoId(),
    check('id').custom(helpersUsuario.existeUsuarioById),
    validarCampos
], usuarioPutActive)

router.put('/desactivar/:id', [
    check('id').isMongoId(),
    check('id').custom(helpersUsuario.existeUsuarioById),
    validarCampos
], usuarioPutDeActiv)

router.post('/', [

    check('tipoUsuario', 'este campo es requerido').not().isEmpty(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'el apellido es obligatorio').not().isEmpty(),
    check('tipoDocumento', 'este campo es requerido').not().isEmpty(),
    check('numeroDocumento', 'Favor ingrese un numero de documento').isLength({ min: 6 }),
    check('direccion', 'este campo es requerido').not().isEmpty(),
    check('ciudad', 'este campo es requerido').not().isEmpty(),
    check('departamento', 'este campo es requerido').not().isEmpty(),
    check('personaContacto', 'este campo es requerido').not().isEmpty(),
    check('telefono', 'este campo es requerido'),
    check('email', 'El correo que ingreso no es valido').not().isEmpty(),
    check('email').custom(helpersUsuario.existeEmail),
    check('password', 'La clave no es valida').isLength({ min: 6 }),
    validarCampos
], usuarioPost)

router.get('/login/user/login', [
    check('email', 'El correo no es valido').isEmail(),
    validarCampos
], usuarioGetlogin)




export default router