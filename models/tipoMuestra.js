import mongoose from "mongoose";

const TipoMuestraSchema = new mongoose.Schema({
    codigo:{type: String,required:true},
    descripcion:{type: String,required:true},
    
})

export default mongoose.model('TipoMuestra', TipoMuestraSchema)