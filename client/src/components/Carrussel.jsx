import { useState, useEffect, useRef } from 'react';
import CardCarrussel from './CardCarrussel';
import image1 from '../assets/imgs-carroussel/pikapak-24-7-365.png';
import image2 from '../assets/imgs-carroussel/pikapak-mercaderia-asegurada.png';
import image3 from '../assets/imgs-carroussel/pikapak-mundo.png';
import image4 from '../assets/imgs-carroussel/pikapak-rapidisimo.png';
import image5 from '../assets/imgs-carroussel/pikapak-huella-cabono.png';
import image6 from '../assets/imgs-carroussel/pikapak-todos.png';

function Carrussel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const carruselRef = useRef(null);

    // Calcula el número de tarjetas visibles según el ancho de la ventana
    const getCardsToShow = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 3; // 3 tarjetas en pantallas grandes
        if (width >= 768) return 2;  // 2 tarjetas en tablets
        return 1;                    // 1 tarjeta en móviles
    };

    const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

    useEffect(() => {
        const handleResize = () => setCardsToShow(getCardsToShow());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const cards = [
        {
            title: 'Primera milla, Ultima milla y Larga distancia',
            description: 'Nuestra amplia red de transportistas y depósitos nos permiten entregas en el día inclusive a destinos alejados (+500 km).',
            image: image6
        },
        {
            title: 'Logística Inversa, rápida y práctica',
            description: 'Pikapak permite administrar las devoluciones tan rápido y fácil como los envíos.',
            image: image4
        },
        {
            title: 'Movimiento 24x7x365',
            description: 'Días de semana, Sábados, Domingos o feriados, de mañana de tarde o noche siempre habrá alguien que entregue tus ventas.',
            image: image1
        },
        {
            title: 'Tracking on-Line',
            description: 'Vos y tu cliente pueden saber en todo momento dónde se encuentran los envíos.',
            image: image3
        },
        {
            title: 'Redespachos a todos lados',
            description: 'Todos los destinos se encuentran interconectados. Podemos llegar a todos lados de manera ágil y segura.',
            image: image5
        },
        {
            title: 'Toda tu mercadería viaja asegurada',
            description: 'Ya sea en tránsito o en hubs, nos respalda la compañía de seguros más grande de Argentina.',
            image: image2
        },
    ]

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                next();
            }
        }, 4000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [isHovered]);


    const translateX = -(currentIndex * (100 / cardsToShow)); // Desplazamiento basado en el número de tarjetas visibles


    return (
        <div className='h-full my-[7rem] py-[4rem] flex flex-col justify-center items-center' id='comoFunciona'>
            <h2 className='text-center xl:text-5xl  font-gibson xl:text-[3rem] text-[35px] h-[1rem] mt-8  mb-[80px] xl:mb-[6rem] tracking-wide font-extrabold xl:font-extrabold'>Todas las Soluciones <br /> en una</h2>
            <div className="relative w-full max-w-[90%] lg:max-w-[75%] xl:max-w-[68%] overflow-hidden">

                <div
                    className="flex transition-transform duration-1000 "
                    style={{ transform: `translateX(${translateX}%)` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    ref={carruselRef}
                >

                    {cards.concat(cards).map((card, index) => (
                        <div className="flex-shrink-0 w-full sm:w-[50%] lg:w-[33.33%] xl:w-[33%] px-0 " key={index}>
                            <CardCarrussel
                                title={card.title}
                                description={card.description}
                                image={card.image}
                            />
                        </div>
                    ))}
                </div>

                <button onClick={prev} className="absolute left-[-5px] top-1/2 transform -translate-y-1/2 text-black text-5xl mx-[-10px] p-3 font-extralight font-sans hover:text-slate-500 z-20">
                    ❮
                </button>


                <button onClick={next} className="absolute right-[-5px] top-1/2 transform -translate-y-1/2 text-black  text-5xl mx-[-10px] p-3 font-extralight font-sans hover:text-slate-500 z-20 ">
                    ❯
                </button>
            </div>
        </div>

    )

}

export default Carrussel;