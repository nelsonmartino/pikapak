import '../output.css';
import Carrussel from "./Carrussel";
import Footer from "./Footer";
import FormContact from "./FormContact";
import GeneraIngresos from "./GeneraIngresos";
import Home from "./Home";
import NavBar from "./NavBar";
import QuieroEnviar from "./QuieroEnviar";
import RemitentesPersonaComercio from "./RemitentesPersonaComercio";
import Unite from "./Unite";


function Landing() {
    return (
        <>
            <NavBar />
            <Home />
            <Carrussel />
            <Unite />
            <GeneraIngresos />
            <QuieroEnviar />
            <RemitentesPersonaComercio />
            <FormContact />
            <Footer />
        </>
    )
}

export default Landing