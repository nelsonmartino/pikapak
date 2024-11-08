
// import { InstagramIcon, LinkedInIcon } from './icons'; // Asegúrate de tener los iconos de Instagram y LinkedIn
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg py-6">
            <div className="mx-auto max-w-7xl xl:px-6 ">
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-center text-white text-sm mb-2 sm:mb-0">
                        &copy; {currentYear} <span className='text-[#ffb200]'><a href="#home" >Pikapak.</a></span> Todos los derechos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center space-x-10 mt-2 sm:mt-0">
                        <a href="../public/Terminos_y_Condiciones_PIKAPAK.pdf" download={"terminosYcondiciones_Pikapak.pdf"} className="text-white text-sm hover:no-underline hover:text-[#ffb200]">
                            Términos y condiciones
                        </a>

                        <a href="../../public/Productos_prohibidos_PIKAPAK.pdf" download={"productosProhibidos_Pikapak.pdf"} className="text-white text-sm hover:no-underline hover:text-[#ffb200]">
                            Productos Prohibidos
                        </a>

                        <a href="mailto:hello@pikapak.app" className="text-white text-sm hover:no-underline hover:text-[#ffb200]">
                            hello@pikapak.app
                        </a>
                    </div>
                    <div className="flex space-x-8 mt-2 sm:mt-0">
                        <a href="https://www.instagram.com/pikapak" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="h-6 w-6 text-white hover:text-[#DD2A7B]" />
                        </a>
                        <a href="https://www.linkedin.com/company/pikapak-app/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="h-6 w-6 text-white hover:text-[#0E76A8]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;