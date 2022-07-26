import Usuario from '../models/usuario.js'

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

const usuarioGetEmail= async (req, res)=>{
    const {email}=req.params
    const usuario = await Usuario.find({email}) 

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

const usuarioGetNombre= async (req, res)=>{
    const {nombre}=req.params
    const usuario = await Usuario.find({nombre}) 

    res.json({
        usuario
    })
}

export{usuarioGet,usuarioGetId,usuarioGetEmail,usuarioGetIdent,usuarioGetNombre}