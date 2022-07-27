import mongoose from "mongoose";

const MuestraSchema = new mongoose.Schema({
    municipioRecoleccion:{type: String,required:true},
    direccion:{type: String,required:true},
    lugar:{type: String,required:true},
    recolectadaPor:{type: String,required:true},
    proceMuestreo:{type: String},
    tipoMuestra:{
        type: mongoose.Schema.ObjectId,
        ref:"TipoMuestra",
        requiered: true
    },
    matrizMuestra:{type: String,required:true},
    fecha:{type: Date,required:true},
    hora:{type: Time, required:true},
    createAt:{type: Date, default:Date.new}

})

export default mongoose.model('Muestra', MuestraSchema)