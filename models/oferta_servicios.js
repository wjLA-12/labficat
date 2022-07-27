import mongoose from "mongoose";

const OfertaSchema = new mongoose.Schema({
    numeroCotizacion:{type: String,minLength:4,required:true},
    codigo:{type: String,minLength:4,required:true},
    aprovacion:{type:Date},
    version:{type:String,requiered:true},
    datosCliente:{
        type: mongoose.Schema.ObjectId,
        ref:"Usuario",
        required: true
    },
    codigoRefencia:{type: String,minLength:4,required:true},
    descripcion:{type: String, required:true},
    unidades:{type: String, required:true},
    tecnicAnalitica:{type: String, required:true},
    metodoAnalitico:{type: String, required:true},
    limiteCuantificacion:{type: String, required:true},
    costoEnsayo:{type: Number, required:true},
    costoItem:{type: Number, required:true},
    subtotal:{type: Number, required:true},
    iba:{type: Number, required:true},
    total:{type: Number, required:true},
    observacionPropuesta:{type:String},
    createAt:{type:Date,default:Date.new}

})

export default mongoose.model('Oferta', OfertaSchema)