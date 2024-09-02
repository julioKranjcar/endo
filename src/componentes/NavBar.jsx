import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="img-fluid" src="/logo.png" width='35 px;'></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to={'/'} >Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Servicios
                                </a>
                                <ul className="dropdown-menu">
                                    <li><NavLink className={'dropdown-item'} to={'/Servicios/1'} >Endoscopía</NavLink></li>
                                    <li><NavLink className={'dropdown-item'} to={'/Servicios/2'} >Urología</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to={'/Dispositivos'} >Dispositivos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to={'/Contacto'} >Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}