import Usuario from '../models/usuario.js';
import { generarJWT } from '../middleware/validar-jwt.js';
import bcryptjs from 'bcryptjs'

const usuarioGet= async (req, res)=>{
    const usuario = await Usuario.find()
    res.json({
        usuario
    })
}

const usuarioGetId= async (req, res)=>{
    const {id}=req.params
    const usuario = await Usuario.findById(id) 

    res.json({
        usuario
    })
}

const usuarioGetIdent= async (req, res)=>{
    const {numeroDocumento}=req.params
    const usuario = await Usuario.find({numeroDocumento}) 

    res.json({
        usuario
    })
}

const usuarioPut = async (req, res)=>{
    const {id}=req.params;
    const { _id,createAdt,estado, ...resto}=req.body;
    const usuario=await Usuario.findByIdAndUpdate(id,resto);

    res.json({
        usuario
    })
}
const usuarioPost= async (req, res)=>{
    const {tipoUsuario,nombre,apellido,tipoDocumento,numeroDocumento,direccion,ciudad,departamento,personaContacto,telefono,email,password}=req.body
    const usuario=new Usuario({tipoUsuario,nombre,apellido,tipoDocumento,numeroDocumento,direccion,ciudad,departamento,personaContacto,telefono,email,password})
    const salt=bcryptjs.genSaltSync(10)
    usuario.password=bcryptjs.hashSync(password,salt)
    usuario.save()
    res.json({usuario})
    
}



const usuarioPutActive=async (req, res) => {   
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:1});

    res.json({
        usuario
    })
}

const usuarioPutDeActiv=async (req, res) => {   
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, {estado:0});

    res.json({
        usuario
    })
}

const usuarioGetlogin= async (req,res)=>{
    const {email,password}=req.body;

    try {
        const usuario = await Usuario.findOne({ email })
        if (!usuario) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }


        if (usuario.estado === 0) {
            return res.status(400).json({
                msg: "Usuario Inactivo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "Usuario / Password no son correctos"
            })
        }

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })

    } catch (error) {
        return res.status(500).json({
            msg: "Hable con el WebMaster"
        })
    }
}

export{usuarioGet,usuarioGetId,usuarioGetIdent,usuarioPut,usuarioPost,usuarioGetlogin,usuarioPutActive,usuarioPutDeActiv}