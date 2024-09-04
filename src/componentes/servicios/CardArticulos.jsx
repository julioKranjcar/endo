const styleArticulos = {
    width: '21rem',
}

export const CardArticulos = ({id, img, nombre, descripcion, caracteristicas, disponible}) => {
    return (
        <>
            <div className="card p-0 m-2 shadow-lg animate__animated animate__fadeInLeft" style={styleArticulos} >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body bg-dark-subtle">
                    <span className="fw-bold text-dark h4">{nombre}</span>
                    <hr className="m-0 mt-1"></hr>
                    <p className="card-text mt-4">
                        {descripcion}
                    </p>
                    <ol className="list-group list-group-numbered">
                        {caracteristicas.map( ({id, detalle}) => ( <li key={id} className="list-group-item bg-dark-subtle border border-0">{detalle}</li> ) ) }
                    </ol>
                    <div className="col-md-12 text-end">
                        <h3><span className="badge text-bg-success">$ 1,999.00</span></h3>
                    </div>
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