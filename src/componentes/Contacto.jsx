export const Contacto = () => {
    return (
        <div className="card col-md-12 mb-4 shadow-lg animate__animated animate__fadeIn" >
            <div className="card-header fw-bold">Contactanos</div>
            <div className="card-body">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <label htmlFor="exampleFormControlInput1" className="form-label">Ingresa tu correo</label>
                </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Escribenos tu mensaje</label>
                    </div>
                <button type="submit" className="btn btn-primary">
                    Enviar correo
                </button>
            </div>
        </div>
    );
}