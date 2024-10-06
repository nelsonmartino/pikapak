import { useState, useEffect, useRef } from 'react';
import CardCarrussel from './CardCarrussel';
import año from '../assets/imgs/pikapak-24-7-365.png';
import asegurada from '../assets/imgs/pikapak-mercaderia-asegurada.png';
import mundo from '../assets/imgs/pikapak-mundo.png';
import inversa from '../assets/imgs/Logistica-inversa.png';
import carbono from '../assets/imgs/pikapak-huella-cabono.png';
import voladora from '../assets/imgs/caja-voladora.png';
import redespachos from '../assets/imgs/piakapk-redespachos.png';


function Carrussel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const carruselRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);


    // Calcula el número de tarjetas visibles según el ancho de la ventana
    const getCardsToShow = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 4; // 3 tarjetas en pantallas grandes
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
            image: voladora
        },
        {
            title: 'Logística Inversa, rápida y práctica',
            description: 'Pikapak permite administrar las devoluciones tan rápido y fácil como los envíos.',
            image: inversa
        },
        {
            title: 'Movimiento 24x7x365',
            description: 'Días de semana, Sábados, Domingos o feriados, de mañana de tarde o noche siempre habrá alguien que entregue tus ventas.',
            image: año
        },
        {
            title: 'Tracking on-Line',
            description: 'Vos y tu cliente pueden saber en todo momento dónde se encuentran los envíos.',
            image: mundo
        },
        {
            title: 'Redespachos a todos lados',
            description: 'Todos los destinos se encuentran interconectados. Podemos llegar a todos lados de manera ágil y segura.',
            image: redespachos
        },
        {
            title: 'Toda tu mercadería viaja asegurada',
            description: 'Ya sea en tránsito o en hubs, nos respalda la compañía de seguros más grande de Argentina.',
            image: asegurada
        },
        {
            title: 'Cero huella de carbono',
            description: 'Aprovechá viajes y almacenamiento existentes con cero impactos adicionales.',
            image: carbono
        },
    ]

    // Duplicar el array de tarjetas para hacer el loop infinito
    const totalCards = [...cards, ...cards];  // Aquí duplicamos las tarjetas para simular el bucle


    const next = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                next();
            }
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, [isHovered]);

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(false), 1000); // Transición de 1 segundo
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    // Controlar el loop infinito
    useEffect(() => {
        // Si llegamos al final del array duplicado (final visible), volvemos al inicio real (sin transición)
        if (currentIndex === totalCards.length / 2) {
            setTimeout(() => {
                carruselRef.current.style.transition = 'none'; // Deshabilitamos la transición
                setCurrentIndex(0); // Volvemos al inicio real
                setTimeout(() => {
                    carruselRef.current.style.transition = 'transform 1s ease';
                }, 50);
            }, 1000);
        }

        // Si llegamos al inicio (por la acción de "prev"), saltamos al final real
        if (currentIndex === -1) {
            setTimeout(() => {
                carruselRef.current.style.transition = 'none'; // Deshabilitamos la transición
                setCurrentIndex(totalCards.length / 2 - 1); // Volvemos al final real
                setTimeout(() => {
                    carruselRef.current.style.transition = 'transform 1s ease'; // Reactivamos la transición
                }, 50);
            }, 1000); // Tiempo para que la transición de la primera tarjeta ocurra
        }
    }, [currentIndex, totalCards.length]);

    const translateX = -(currentIndex * (100 / cardsToShow));

    return (
        <div className='h-full py-[4rem] flex flex-col justify-center items-center overflow-hidden xl-w-full' id='comoFunciona'>
            <h2 className='text-center xl:text-4xl  font-gibson xl:text-[3rem] text-[35px] h-[1rem] mt-8  mb-[7.5rem] xl:mb-[8rem] tracking-wide font-extrabold xl:font-extrabold'>Todas las Soluciones <br /> en una</h2>
            <div className="relative w-full  lg:max-w-[75%] xl:max-w-[85%] overflow-hidden ">

                <div
                    className="flex transition-transform duration-1000 xl:p-2"
                    style={{ transform: `translateX(${translateX}%)` }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    ref={carruselRef}
                >

                    {totalCards.map((card, index) => (
                        <div className="flex-shrink-0 xl:mx-[1.5px] w-full sm:w-[50%] lg:w-[33.33%] xl:w-[25%] " key={index}>
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