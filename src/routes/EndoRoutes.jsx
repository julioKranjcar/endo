import { Navigate, Route, Routes } from "react-router-dom";
import { Servicios } from "../componentes/Servicios";
import { Contacto } from "../componentes/Contacto";

export const EndoRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={ <Navigate to={'/'} /> }
            />
            <Route
                path="Contacto"
                element={ <Contacto /> }
            />
            <Route
                path="Servicios/:id"
                element={ <Servicios/> }
            />
        </Routes>
    );
}