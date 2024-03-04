import express from 'express' 
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json());

const port = process.env.port

app.listen(port, () =>{
    console.log(`Servidor Levantado en el Puerto ${port}`)
})