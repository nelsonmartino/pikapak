import { useEffect, useState } from 'react';

const Home = () => {
    const phrases = ['Sin Demoras.', 'A cualquier hora.', 'Rapidísimo.'];
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
        <div className='bg-[url("../src/assets/Background_header.png")] bg-cover bg-center bg-no-repeat '>
            <div className=' max-w-[1100px] flex justify-center'>

                <div className='max-w-[77%] mt-[3%] '>
                    <p className='font-sans text-[0.8rem] font-extrabold pt-0 pb-[7px] leading-[15px] tracking-[1px] uppercase text-[#ffb200]'>ENVIA CON PIKAPAK</p>

                    <div className=' '>
                        <h2 className='text-[64px] font-gibson pt-[8px] font-bold leading-[5rem] text-white'>Enviá (casi) cualquier cosa,<br /> a todos lados, <br /><div className='inline-block'>{text} </div></h2>
                    </div>

                    <p className='text-[1rem] leading-[1.5rem] font-normal py-[17px] pr-120px text-white'>Pikapak es una plataforma logística 100% crowdsourced que coordina transportistas y depósitos en una red de movimiento de mercaderías 24x7x365.</p>

                    <div className=''>
                        <button className='text-[16px] bg-transparent text-[#fff] center min-w-[140px] my-[15px] mx-0 leading-[17px] transition-all easy-in duration-[0.15s] inline-block px-[16px] py-[18px] no-underline uppercase rounded-sm outline-none tracking-[2px] font-extrabold whitespace-nowrap border-solid border-2 border-white hover:bg-white hover:text-black' >GET STARTED</button>
                    </div>


                </div>
            </div>
            <div className='max-w-[100%] border-solid border-black border-2 flex flex-col p-3 mb-16'>
                <div className='flex-col justify-center mb-2'>

                    <h2 className='flex justify-center mb-2 text-white'>Inscribite a nuestro Newslatter</h2>
                    <div className='flex  justify-center h-[3rem] '>

                        <input className='w-[30%]  border-solid border-white border-2 pl-2 rounded-xl ' placeholder='Escribe tu Email...' type="text" />
                        <button className='text-[16px] bg-transparent text-[#fff] center min-w-[130px] leading-[17px] transition-all easy-in duration-[0.15s] inline-block ml-2 px-[10px] py-[15px] no-underline uppercase rounded-xl outline-none tracking-[2px] font-bold whitespace-nowrap border-solid border-2 border-[white] hover:bg-white hover:text-black' type="submit">Enviar</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
