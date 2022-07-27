import Ensayo from "../models/ensayo.js";

const ensayoGet= async (req, res)=>{
    const ensayo = await Ensayo.find()
    res.json({
        ensayo
    })
}

const ensayoGetId= async (req, res)=>{
    const {id}=req.params
    const ensayo = await Ensayo.findById(id) 

    res.json({
       ensayo
    })
}

const ensayoPut = async (req, res)=>{
    const {id}=req.params;
    const { _id,ensayo,metodo,tecnica, ...resto}=req.body;
    const ensa=await Ensayo.findByIdAndUpdate(id,resto);

    res.json({
        ensa
    })
}
const ensayoPost= async (req, res)=>{
    const {ensayo,metodo,tecnica,precio}=req.body
    const ensa=new Ensayo({ensayo,metodo,tecnica,precio})
    ensa.save()
    res.json({ensa})
    
}

const ensayoPutActive=async (req, res) => {   
    const { id } = req.params;
    const ensa = await Ensayo.findByIdAndUpdate(id, {estado:1});

    res.json({
        ensa
    })
}

const ensayoPutDeActiv=async (req, res) => {   
    const { id } = req.params;
    const ensa = await Ensayo.findByIdAndUpdate(id, {estado:0});

    res.json({
        ensa
    })
}

export{ensayoGet,ensayoGetId,ensayoPut,ensayoPost,ensayoPutActive,ensayoPutDeActiv}