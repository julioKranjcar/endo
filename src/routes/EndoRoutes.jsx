import { Navigate, Route, Routes } from "react-router-dom";
import { Servicios } from "../componentes/Servicios";
import { Contacto } from "../componentes/Contacto";
import { Home } from "../componentes/Home";
import { Dispositivos } from "../componentes/Dispositivos";

export const EndoRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={ <Home/> }
            />
            <Route
                path="Contacto"
                element={ <Contacto /> }
            />
            <Route
                path="Dispositivos"
                element={ <Dispositivos /> }
            />
            <Route
                path="Servicios"
                element={ <Servicios/> }
            />
            <Route
                path="Servicios/:id"
                element={ <Servicios/> }
            />
        </Routes>
    );
}