import express from 'express' 
import dotenv from 'dotenv'
import HabRouter from  './routes/Habitaciones.routes.js'
import CliRouter from  './routes/Clientes.routes.js'

dotenv.config()

const app = express()

app.use(express.json());

const port = process.env.port

app.listen(port, () =>{
    console.log(`Servidor Levantado en el Puerto ${port}`)
})

app.use('/Habitaciones', HabRouter)
app.use('/Clientes', CliRouter)