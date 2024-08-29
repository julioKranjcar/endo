import { useParams } from "react-router-dom";

const data = [
    {
        id: 1,
        nombre: 'Endoscopía',
        descripcion: 'Dispositivos, equipos e insumos que se utilizan en la endoscopía gastrointestinal tales como Pinzas de Biopsia, pinzas de recuperación de cuerpos extraños, dispositivos de hemostasia, dispositivos para vía biliar, prótesis plásticas y metálicas, asas de polipectomía, dispositivos para alimentación enteral, así como desinfectantes y detergentes para el reprocesamiento de endoscopios.',
        img: '/public/img/endoscopia.png',
    },
    {
        id: 2,
        nombre: 'Urología',
        descripcion: 'Equipos y dispositivos para el tratamiento de hiperplasia prostática benigna, tratamiento de litos en uréter y riñón, tratamiento de incontinencia urinaria femenina y dispositivos para disfunción eréctil tales como ureteroscopios flexibles y semirigidos, reseptoscopios, guías, canastillas, mallas, prótesis entre otros.',
        img: '/public/img/urologia.jpg',
    },
];

export const Servicios = () => {
    const { id } = useParams();
    const servicio = data.filter((i) => (i.id == id) );
    
    return (
        <div className="row my-4">
            { servicio.map( (item) => (
                <div key={item.id} className="card w-25 m-2" >
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
                ) ) }
        </div>
    );
}