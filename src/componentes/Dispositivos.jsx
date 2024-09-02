import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        nombre: 'Aguja de escleroterapia',
        descripcion: ' Las agujas de escleroterapia Interject™ están diseñadas para ofrecer acceso para aplicaciones de terapia de inyección; también pueden utilizarse para polipectomía y resección endoscópica de la mucosa (EMR, por sus siglas en inglés). Construcción de funda que permite empujar, diseñada para facilitiar el avance a través de vías difíciles hacia una anatomía remota. Las agujas de escleroterapia Interject™ presentan un diseño único de cateter interno en forma de estrella que ayuda a promover la actuación de la aguja en anatomías díficiles (incluso después de doblarse). La aguja se utiliza normalmente en terapia combinada con otras modalidades de tratamiento, como ser hemoclips, asas de polipectomía o ligadores de bandas. ',
        img: '/img/dispositivos/1.jpg',
    },
    {
        id: 2,
        nombre: 'Kit de gastrostomía',
        descripcion: 'El tubo PEG de silicona reforzado con domo del set de Gastrostomía Endoscópica Percutánea de Seguridad está disponible en múltiples calibres franceses, con dos opciones de refuerzo externo para satisfacer las necesidades del médico y el paciente: Circular y en T. ',
        img: '/img/dispositivos/2.jpg',
    },
    {
        id: 3,
        nombre: 'Botón de reemplazo',
        descripcion: 'El diseño del botón de Reemplazo EndoVive™ puede ayudar a reducir el riesgo de desprendimiento accidental. El diseño y la flexibilidad de bajo perfil al nivel de la piel puede ayudar a garantizar el confort y la discreción del paciente.',
        img: '/img/dispositivos/3.jpeg',
    },
    {
        id: 4,
        nombre: 'Clip resolution',
        descripcion: 'El Clip Resolution™ radiopaco está diseñado para hemostasia, marcado endoscópico, cierre y anclado de tubos de alimentación yeyuna, cuenta con el certificado 510(k) para hemostasia. Capacidad de reapertura: Diseñado para poder abrirse y cerrarse hasta cinco veces antes de su colocación, lo que ayuda a su reposicionamiento. Mecanismo de fijación: Una vez colocado, el Clip Resolution™ queda fijado de manera segura para una mejor retención. RM: Conforme a las Instrucciones de Uso, el Clip Resolution™ puede utilizarse en entornos de Resonancia Magnética (RM). Pre-cargado: Listo para usar, lo que resulta esencial en situaciones de sangrado de emergencia. Alcance de pinza de 11mm de ancho: Diseñado para tomar una cantidad considerable de tejido.',
        img: '/img/dispositivos/4.jpg',
    },
    {
        id: 5,
        nombre: 'Prótesis biliar',
        descripcion: 'El Stent Biliar Advanix™ con Sistema de Entrega NaviFlex™ RX está diseñado para maximizar las tasas de flujo, mejorar la capacidad de empuje en anatomías difíciles, y ser reaposicionable para ayudar a lograr una colocación precisa. El Stent Biliar Advanix™ y el Sistema de Entrega NaviFlex™ RX están disponibles en una variedad de opciones: sistemas pre-cargados RX, simples, múltiples tamaños y formas para atender las preferencias de los profesionales, diferentes estados de enfermedad y anatomías de pacientes.',
        img: '/img/dispositivos/5.jpg',
    },
];

const dispositivoInicial = '';

export const Dispositivos = () => {
    const [servicio, setServicio ] = useState(dispositivoInicial);
    const [dispositivos, setDispositivos] = useState(data);
    const onInputChange = ({target}) => {
        const {value} = target;
        setServicio(value);
    }

    const obtenerDispositivo = (event) => {
        event.preventDefault();
        setDispositivos( data.filter(({nombre}) => (nombre.toUpperCase().includes(servicio.toUpperCase() )))  );
    }

    const styleImg = {
        minHeight: '100%',
        minWidth: '100%',
    }

    return (
        <>
            <div className="row m-2 animate__animated animate__fadeIn">
                <div className="col-md-12 p-0 mb-4">
                    <form onSubmit={obtenerDispositivo} className="d-flex" method="POST" autoComplete="off">
                        <input onChange={onInputChange} value={servicio} className="form-control me-2" name="servicio" type="search" placeholder="Buscar dispositivo" aria-label="Buscar dispositivo" />
                        <button className="btn btn-success d-flex" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="m-1" /> Buscar</button>
                    </form>
                </div>
                { dispositivos.map((item) => (
                    <div key={item.id} className="card p-0 mb-4 col-sm-12 col-md-12 animate__animated animate__fadeInUp" >
                        <div className="row g-0">
                            <div className="col-md-3 col-lg-2">
                                <img src={item.img} className="img-fluid rounded-start" style={styleImg} alt="..." />
                            </div>
                            <div className="col-md-9 col-lg-10">
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text">{item.descripcion}</p>
                                    {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                )) }    
            </div>
        </>
    );
}