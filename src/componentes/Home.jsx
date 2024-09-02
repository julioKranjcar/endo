const endoscopias = [
    {
        id: 1,
        nombre: 'Endoscopica',
        img: '../public/img/urologia.jpg',
        descripcion: 'Se adapta una sonda de ultrasonido al endoscopio y se utiliza principalmente para las capas de la mucosa del tubo digestivo, así como para toma de biopsias de hígado y páncreas.',
    },
    {
        id: 2,
        nombre: 'De tubo digestivo alto',
        img: '../public/img/urologia.jpg',
        descripcion: 'Se utiliza para el estudio del tubo digestivo superior; esófago, estómago e intestino delgado.',
    },
    {
        id: 3,
        nombre: 'Endoscopía o colonoscopía de tubo digestivo',
        img: '../public/img/urologia.jpg',
        descripcion: 'Se emplea para examinar internamente el colón (intestino grueso) y el recto.',
    },
];

export const Home = () => {
    return (
        <>
            <div className="card mb-4">
                <div className="card-header fw-bold">
                    Acerca de nosotros
                </div>
                <div className="card-body">
                    <div className="col-md-12">
                        <p>
                        Endoscopía e Imagen Médica, está dedicado al cuidado de la vida de los pacientes a través de proporcionar los mejores productos, equipos y servicios médicos con oportunidad y calidad para disciplinas médicas de alta especialidad.
                        </p>
                    </div>
                    <blockquote className="blockquote mb-0">
                        <p>¿La endoscopía duele?</p>
                        <footer className="blockquote-footer">El procedimiento de endoscopía  es indoloro.</footer>
                    </blockquote>

                    <div className="col-md-12 fw-bold mt-4">
                        Tipos de endoscopía
                    </div>

                    <div className="row mt-4">
                        { endoscopias.map((item) => (
                            <div key={item.id} className="col-sm-12 col-md-6 col-lg-6 mb-4 animate__animated animate__fadeInUp" >
                                <div className="card" >
                                    <div className="card-body d-flex">
                                        <div className="col-4">
                                            <img src={item.img} className="rounded" width={'100%;' } />
                                        </div>
                                        <div className="col-8 px-3">
                                            <h4 className="text-primary">{item.nombre}</h4>
                                            <p className="card-text">{item.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    );
}