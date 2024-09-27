
// import { InstagramIcon, LinkedInIcon } from './icons'; // Asegúrate de tener los iconos de Instagram y LinkedIn


function Footer() {
    return (
        <footer className="bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg py-6">
            <div className="mx-auto max-w-7xl xl:px-6">
                <div className="flex flex-col items-center justify-between sm:flex-row">
                    <p className="text-center text-white text-sm mb-2 sm:mb-0">
                        &copy; 2024 Pikapak. Todos los derechos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center space-x-4 mt-2 sm:mt-0">
                        <a href="/terms" className="text-white text-sm hover:underline">
                            Términos y condiciones
                        </a>
                        <a href="/privacy" className="text-white text-sm hover:underline">
                            Política de privacidad
                        </a>
                        <a href="mailto:hello@pikapak.app" className="text-white text-sm hover:underline">
                            hello@pikapak.app
                        </a>
                    </div>
                    <div className="flex space-x-4 mt-2 sm:mt-0">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            {/* <InstagramIcon className="h-6 w-6 text-white hover:text-gray-400" /> */}
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            {/* <LinkedInIcon className="h-6 w-6 text-white hover:text-gray-400" /> */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer