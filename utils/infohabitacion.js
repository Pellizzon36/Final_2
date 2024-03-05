
import { readFile } from 'fs/promises';

const fileHab = await readFile('./Habitaciones.json', 'utf-8');
const HabData = JSON.parse(fileHab);

export const get_hab_byid = (ids) => {
    const habiatciones = ids.map(id => {
        const HabitacionInfo = HabData.find(e => e.id === id);
        return HabitacionInfo ? HabitacionInfo.piso : 'No se encontro la Habitacion';
    });

    return habiatciones;
};