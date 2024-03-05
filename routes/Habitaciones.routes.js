import { Router } from "express"
import { readFile } from 'fs/promises'
import { get_cli_byid } from "../utils/infocliente.js"

const  router = Router()


//info Habitaciones

router.post('/infoHabitacionPiso', async (req, res) => {
    const piso = req.body.piso;

    try {
        const fileHab = await readFile('./Habitaciones.json', 'utf-8');
        const HabData = JSON.parse(fileHab);

        const arr = HabData.filter(e => e.piso === piso);
        const result = arr.map(e => {
            const cliente = get_cli_byid(e.Habitaciones);
            console.log(Habitaciones)
            return {
                Cliente: cliente,
                Habitacion: e.Habitacion,
                Estado: e.Estado,
                Ocupacion: e.Ocupacion,
            };
        });
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: `${piso} no existe` });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})






export default router