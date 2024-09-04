import { CardArticulos } from "./CardArticulos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const articuloInicial = '';

export const CardServicio = ({id, nombre, descripcion, articulos}) => {
    const [articulo, setArticulo] = useState(articuloInicial);
    const [listaArticulos, setArticulos] = useState(articulos);
    const obtenerDispositivo = (event) => {
        event.preventDefault();
        setArticulos( articulos.filter(({nombre}) => (nombre.toUpperCase().includes(articulo.toUpperCase() )) ) );
    }
    
    const onInputChange = ({target}) => {
        const {value} = target;
        setArticulo(value);
    }

    return (
        <>
            <div  className="col-sm-12 col-md-12 col-lg-12  animate__animated animate__fadeIn">
                <div  className="card m-2 shadow-lg" >
                    <div className="card-header fw-bold">{nombre}</div>
                    <div className="card-body">
                        <div className="col-md-12 p-0 mb-4">
                            <form onSubmit={obtenerDispositivo} className="d-flex" method="POST" autoComplete="off">
                                <input onChange={onInputChange} value={articulo} className="form-control me-2" name="articulo" type="search" placeholder="Buscar" aria-label="Buscar" />
                                <button className="btn btn-success d-flex" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="m-1" /> Buscar</button>
                            </form>
                        </div>
                        <p className="card-text mb-4">{descripcion}</p>
                        <div className="row">
                            { listaArticulos.map(({id, img, nombre, descripcion, caracteristicas, disponible}) => (
                                <CardArticulos 
                                    key={id}
                                    id={id}
                                    img={img}
                                    nombre={nombre}
                                    descripcion={descripcion}
                                    caracteristicas={caracteristicas}
                                    disponible={disponible}
                                />
                            )) }  
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}