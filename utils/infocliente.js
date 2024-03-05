import { readFile } from 'fs/promises';

const filecliente = await readFile('./Cliente.json', 'utf-8');
const CliData = JSON.parse(filecliente);

export const get_cli_byid = (ids) => {
    const Cliente = ids.map(id => {
        const clienteinfo = CliData.find(e => e.id === id);
        return clienteinfo ? clienteinfo.nombre : 'Cliente no encontrado';
    });

    return Cliente;
};