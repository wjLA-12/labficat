import Muestra from '../models/muestra.js'

const muestraGet = async (req, res)=>{
    const muestra = await Muestra.find()
    res.json({
        muestra
    })
}

const muestraGetId = async (req, res)=>{
    const {id}=req.params
    const muestra = await Muestra.findById(id)

    res.json({
        muestra
    })
}

const muestraPost = async (req, res)=>{
    const {municipioRecoleccion,direccion, lugar,recolectadaPor,proceMuestreo,tipoMuestra,matrizMuestra,fecha,hora}=req.body
    const muestra = new Muestra({municipioRecoleccion,direccion, lugar,recolectadaPor,proceMuestreo,tipoMuestra,matrizMuestra,fecha,hora})
    muestra.save()
    res.json({muestra})
}

export {muestraGet,muestraGetId,muestraPost}