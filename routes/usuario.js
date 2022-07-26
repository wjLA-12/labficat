import { Router } from "express";
import { usuarioGet,usuarioGetId,usuarioGetEmail,usuarioGetIdent,usuarioGetNombre } from "../controllers/usuario";

const router = new Router()

router.get('/',usuarioGet)

router.get('/id', usuarioGetId)

router.get('/:id',usuarioGetEmail)


router.get('/:email',usuarioGetIdent)


router.get('/:nombre',usuarioGetNombre)