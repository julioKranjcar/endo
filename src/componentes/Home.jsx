import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { Servicios } from "./Servicios";

export const Home = () => {
    return (
        <>

            <NavBar />
            <div className="container">
                <Servicios/>
            </div>
            <Footer/>
        </>
    );
}