import express from "express"
import cors from "cors"
import  {dbConnection} from "../database/config.js"
import usuario from "../routes/usuario.js"

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