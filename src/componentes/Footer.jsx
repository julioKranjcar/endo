import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePhone, faEnvelopeOpenText, faLocationDot, faClock, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <div className='bg-dark-subtle p-4'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-2 mb-4">
                    <span className='fw-bold'><FontAwesomeIcon icon={faSquarePhone} /> Teléfonos</span><br />
                    <span>442 220 9548</span><br />
                    <span>55 5440 3900</span><br />
                    <span><FontAwesomeIcon icon={faWhatsapp} className='fw-bold text-success' /> 55 5440 3900</span><br />
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <span className='fw-bold'><FontAwesomeIcon icon={faEnvelopeOpenText} /> Correo</span> <br />
                    <span>marketing@endoimagen.com</span>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <span className='fw-bold'><FontAwesomeIcon icon={faLocationDot} /> Ubicación</span> <br />
                    <span>Calle Morera #421 Querétaro / Cádiz #200 B. Juárez, CDMX</span>
                </div>
                <div className="col-md-6 col-lg-3 mb-4">
                    <span className='fw-bold'><FontAwesomeIcon icon={faClock} /> Horario de atención</span> <br />
                    <span>Lunes - Viernes 9:00-18:00</span>
                </div>
            </div>
            <div className='col-md-12 text-center mt-2 fw-bold'>
                <FontAwesomeIcon icon={faCopyright} /> Todos los derechos reservados
            </div>
        </div>
    );
}