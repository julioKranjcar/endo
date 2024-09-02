export const Contacto = () => {
    return (
        <div className="card col-md-12 mb-4 animate__animated animate__fadeInUp" >
            <div className="card-header fw-bold">Contactanos</div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa tu correo</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribenos tu mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar correo
                </button>
            </div>
        </div>
    );
}