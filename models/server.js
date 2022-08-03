import express from "express"
import cors from "cors"
import  {dbConnection} from "../database/config.js"
import usuario from "../routes/usuario.js"
import tipomuestra from "../routes/tipoMuestra.js"
import muestra from "../routes/muestra.js"

class Server{
    constructor(){
        this.app = express()
        this.middlewares()
        this.port=process.env.PORT
        this.conectarBd()
        this.routes()
    }
    routes(){
        this.app.use("/api/usuario", usuario)
        this.app.use("/api/tipomuestra",tipomuestra)
        this.app.use("/api/muestra",muestra)
       
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    async conectarBd(){
        await dbConnection()
    }
   
    
    escuchar() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        })
    }
}
export {Server}