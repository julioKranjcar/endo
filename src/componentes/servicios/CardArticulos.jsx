const styleArticulos = {
    width: '18rem',
}

export const CardArticulos = ({id, img, nombre, descripcion, caracteristicas, disponible}) => {
    return (
        <>
            <div className="card p-0 m-2 animate__animated animate__fadeInLeft" style={styleArticulos} >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body bg-dark-subtle">
                    <span className="fw-bold text-dark h4">{nombre}</span>
                    <p className="card-text mt-4">
                        {descripcion}
                    </p>
                    <ol className="list-group list-group-numbered">
                        {caracteristicas.map( ({id, detalle}) => ( <li key={id} className="list-group-item bg-dark-subtle border border-0">{detalle}</li> ) ) }
                    </ol>
                </div>
                { disponible == '' ||  
                    <div className="card-footer fw-bold text-body-secondary text-center pt-4">
                        <span className="text-danger">{disponible}</span>
                    </div> 
                }
                
            </div>
        </>
    );
}