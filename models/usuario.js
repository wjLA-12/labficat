import mongoose from 'mongoose'
const UsuarioSchema = new mongoose.Schema({
    tipoUsuario:{type:String,maxLength:25,required:true},
    nombre:{type: String,maxLength:25,required:true},
    apellido:{type: String,maxLength:25,required:true},
    tipoDocumento:{type: String,maxLength:25,required:true},
    numeroDocumento:{type: String,minLength:6,required:true,unique:true},
    direccion:{type: String,maxLength:25,required:true},
    ciudad:{type: String,unique:true,required:true},
    departamento:{type: String,required:true},
    personaContacto:{type: String,maxLength:25,required:true},
    telefono:{type:String,maxLength:25,required:true},
    email:{type: String,maxLength:25,required:true},
    password:{type: String,required:true,minLength:6},
    estado:{type: String, default:1},
    createAt:{type:Date,default:Date.new}
})


export default mongoose.model('Usuario',UsuarioSchema)