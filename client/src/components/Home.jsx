import { useEffect, useState } from 'react';
import imgRapidisimo from '../assets/imgs/pikapak-rapidisimo.png';

const Home = () => {
    const phrases = ['sin demoras.', 'a toda hora.', 'rapidísimo.'];
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [loop, setLoop] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 100;

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];
        const timeout = setTimeout(() => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
                if (text === '') {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            } else {
                setText((prev) => currentPhrase.slice(0, prev.length + 1));
                if (text === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), 1000); // Espera antes de empezar a borrar
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, phraseIndex, phrases]);

    return (
        <div className='bg-[url("./assets/imgs/Background_header.png")] bg-cover bg-center bg-no-repeat overflow-x-hidden' id='home'>
            <div className=' max-w-[1100px] flex justify-center py-14 xl:m-auto '>
                <div className='max-w-[77%] mt-[5rem] xl:mt-[3rem] '>
                    <p className='relative text-[1rem] font-extrabold pt-0 pb-[7px] leading-[15px] tracking-[1px] uppercase text-[#ffb200]'>ENVIA CON PIKAPAK</p>
                    <div >
                        <h2 className='relative xl:text-[64px] text-[42px] pt-[8px] font-bold leading-[5rem] text-white z-20'>Enviá (casi) cualquier cosa,<br /> a todos lados, <br /><div className='inline-block  text-[#ffb200]  whitespace-nowrap min-w-[200px] overflow-hidden'
                            style={{ minHeight: '5rem', display: 'inline-block', width: 'auto' }}
                        >{text} </div></h2>
                    </div>

                    {/* Imagen */}
                    <div className='w-full flex justify-center mt-[-15rem] ml-[7rem] xl:ml-[15rem] xl:mt-[-17.5rem]  overflow-x-hidden relative'>
                        <img
                            src={imgRapidisimo}
                            alt="imagen principal usuario y camion de pikapak"
                            className='max-w-[85%] h-auto z-0'
                        />
                    </div>
                    {/* <div className='xl:min-w-full  xl:top-[23rem] xl:relative xl:right-[120rem] xl:px-4 xl:h-full '> */}
                    <p className='xl:text-[1.5rem]  text-[1rem] leading-[1.5rem] font-normal xl:mt-[-8.5rem] py-[17px] pr-120px text-white relative z-10 '>Pikapak es una plataforma logística 100% crowdsourced que coordina transportistas y depósitos en una red de movimiento de mercaderías 24x7x365.</p>
                    {/* </div> */}
                    <div className=''>
                        <button className='xl:text-[16px] text-[14px] bg-transparent text-[#fff] center xl:min-w-[140px] min-w-[140px] py-[12px] xl:py-[18px]  my-[15px] mx-0 leading-[17px] transition-all easy-in duration-[0.15s] inline-block px-[16px] py-[18px] no-underline uppercase rounded-sm outline-none tracking-[2px] font-extrabold whitespace-nowrap border-solid border-2 border-white hover:bg-[#3C047B] hover:text-white  hover:shadow-lg hover:shadow-indigo-900/90' >EMPEZAR</button>
                    </div>
                </div>
            </div>
            {/* Sección con imagen de fondo fija */}
            <div className='relative   bg-[url("./assets/imgs/pikapak-viajas.png")] xl:bg-cover bg-center bg-no-repeat bg-fixed xl:bg-fixed xl:bg-[length:99.99%_99.99%] bg-[length:100%]' >

                {/* <div className='absolute inset-0 bg-black opacity-30'></div> Filtro oscuro opcional */}

                <div className='h-[10rem]'>

                </div>
                <div className='max-w-[100%]  flex flex-col p-3 mb-16 bg-[#9f31a8] shadow-xl shadow-indigo-600/70'>
                    <div className='flex-col justify-center mb-2 '>

                        <h2 className='flex justify-center mb-2 text-white'>Suscribite para novedades</h2>
                        <div className='flex  justify-center h-[3rem] '>

                            <input className='xl:w-[30%] w-[60%] border-solid border-white border-2 pl-2 rounded-xl  focus:shadow-lg focus:shadow-indigo-200/80' placeholder='Escribe tu Email...' type="text" />

                            <button className='text-[16px] bg-transparent text-[#fff] center min-w-[130px] leading-[17px] transition-all easy-in duration-[0.15s] inline-block ml-2 px-[10px] py-[15px] no-underline uppercase rounded-xl outline-none tracking-[2px] font-bold whitespace-nowrap border-solid border-2 border-[white] hover:bg-white hover:text-black' type="submit">Enviar</button>
                        </div>

                    </div>
                </div>

            </div>




        </div>
    );
};

export default Home;
