import Usuario from "../models/usuario.js";

const helpersUsuario={
    existeUsuarioById : async (id) => {
        const existe = await Usuario.findById(id)

        if (!existe) {
            throw new Error(`El id no existe ${id}`)
        }
    },

    existeEmail :async(email) => {
       
            const existe = await Usuario.findOne({ email});
        
                if (existe ) {
                    throw new Error(`El email ya está registrado`)
                }
        
        
    },
    
    existeIdenti :async(numeroDocumento) => {
       
        const existe = await Usuario.findOne({ numeroDocumento});
    
            if (existe ) {
                throw new Error(`Este numero de documento ya cuenta con un registro`)
            }
    
    
},


   
    

}
export {helpersUsuario};