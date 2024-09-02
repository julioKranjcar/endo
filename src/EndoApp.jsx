import { NavBar } from './componentes/NavBar';
import { Footer } from './componentes/Footer';
import { EndoRoutes } from './routes/EndoRoutes';

export const EndoApp = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid mt-4">
                <EndoRoutes />
            </div>
            <Footer />
        </>
    );
}