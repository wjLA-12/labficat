import mongoose from "mongoose";

const EnsayoSchema = new mongoose.Schema({
    ensayo:{type: String,required:true},
    metodo:{type: String,required:true},
    tecnica:{type: String,required:true},
    precio:{type: Number,required:true},
    

})

export default mongoose.model('Ensayo', EnsayoSchema)