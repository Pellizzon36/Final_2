import { Router } from "express"
import { readFile } from 'fs/promises'
import { promises as fs } from 'fs';
const filepedido = await readFile('./Cliente.json', 'utf-8')
const ClienteData = JSON.parse(filepedido)

const  router = Router()

//Nuevo Cliente

let idContador = 7; // Inicializar el contador

router.post('/NuevoCliente', async (req, res) => {
    try {
        const NewCliente = req.body;

        // Asignar una ID única a la nueva mesa usando el contador
        NewCliente.id = idContador++;

        // Agregar la nueva mesa al array ClienteData
        ClienteData.push(NewCliente);

        // Guardar el array actualizado en el archivo JSON
       await fs.writeFile('./Cliente.json', JSON.stringify(ClienteData, null, 2), 'utf-8');

        res.status(200).json({ message: 'Cliente Agregado'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar el Cliente' });
    }
});

export default router