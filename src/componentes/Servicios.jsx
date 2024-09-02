import { useParams } from "react-router-dom";
import { getServicios } from '../services/serviciosService';
import { useEffect, useState } from "react";
import { CardServicio } from "./servicios/cardServicio";

export const Servicios = () => {
    const { id } = useParams();
    const [servicios, setServicios] = useState([]);
    const servicio = id != undefined ? servicios.filter((i) => (i.id == id) ) : servicios;

    useEffect(() => {
        setServicios( getServicios() );
    }, []);
    
    return (
        <div className="row my-4">
            
            { servicio.map( ({id, nombre, descripcion, articulos}) => (
                <CardServicio 
                    key={id}
                    id={id}
                    nombre={nombre}
                    descripcion={descripcion}
                    articulos={articulos}
                />
                ) ) }
        </div>
    );
}