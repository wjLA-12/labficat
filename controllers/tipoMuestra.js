import TipoMuestra from "../models/tipoMuestra.js";

const tipoMuestraGet= async (req, res)=>{
    const tipoMuestra = await TipoMuestra.find()
    res.json({
        tipoMuestra
    })
}

const tipoMuestraGetId= async (req, res)=>{
    const {id}=req.params
    const TipoMuestra = await TipoMuestra.findById(id) 

    res.json({
       TipoMuestra
    })
}

const tipoMuestraPut = async (req, res)=>{
    const {id}=req.params;
    const { codigo,descripcion}=req.body;
    const tipoMuestra=await TipoMuestra.findByIdAndUpdate(id,{codigo,descripcion});

    res.json({
        tipoMuestra
    })
}
const tipoMuestraPost= async (req, res)=>{
    const {codigo, descripcion}=req.body
    const tipoMuestra=new TipoMuestra({codigo, descripcion})
    tipoMuestra.save()
    res.json({tipoMuestra})
    
}

const tipoMuestraPutActive=async (req, res) => {   
    const { id } = req.params;
    const tipoMuestra = await TipoMuestra.findByIdAndUpdate(id, {estado:1});

    res.json({
        tipoMuestra
    })
}

const tipoMuestraPutDeActiv=async (req, res) => {   
    const { id } = req.params;
    const tipoMuestra = await TipoMuestra.findByIdAndUpdate(id, {estado:0});

    res.json({
        tipoMuestra
    })
}

export{tipoMuestraGet,tipoMuestraGetId,tipoMuestraPost,tipoMuestraPut,tipoMuestraPutActive,tipoMuestraPutDeActiv}