export const Contacto = () => {
    return (
        <div className="card col-md-12 mb-4" >
            <div className="card-header">Contactanos</div>
            <div className="card-body">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Ingresa tu correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Escribenos tu mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar correo
                </button>
            </div>
        </div>
    );
}