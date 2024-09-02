import {servicios} from '../data/servicios';

export const getServicios = () => {
    return servicios.sort();
}