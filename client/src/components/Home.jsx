/* eslint-disable no-constant-binary-expression */
import { useEffect, useState } from 'react';
import imgRapidisimo from '../assets/imgs/pikapak-rapidisimo.png';

const Home = () => {
    const phrases = ['sin demoras.', 'a toda hora.', 'rapidísimo.'];
    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formStatus, setFormStatus] = useState('');
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',

    });
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function validateEmail() {
        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.email = 'Debe ingresar un correo electrónico para enviar.';
        } else if (!emailRegex.test(formData.email)) {
            errors.email = 'Por favor, introduce un correo electrónico válido.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    }

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();



        const newslatterUrl = 'http://localhost:3001' || import.meta.env.VITE_BACKEND_URL;

        try {
            const response = await fetch(`${newslatterUrl}/newsletter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const resJSON = await response.json();
            console.log(resJSON);

            if (validateEmail()) {
                console.log('Formulario enviado con éxito:', formData);
                setSuccessModalIsOpen(true);
                // Reseteo
                setFormData({
                    email: '',
                });
            } else {
                setFormStatus('Error al enviar el mail.');
                console.log(formStatus)
            }
        } catch (error) {
            setFormStatus('Error al enviar el mail.', error);
        }

    }
    function closeSuccessModal() {
        setSuccessModalIsOpen(false);
    }

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
        <>
            <div className='bg-[url("./assets/imgs/Background_header.png")] bg-cover bg-center bg-no-repeat overflow-x-hidden' id='home'>
                <div className=' max-w-[1100px] flex justify-center xl:py-12 py-4 xl:m-auto '>
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

                        <p className='xl:text-[1.5rem]  text-[1rem] leading-[1.5rem] font-normal xl:mt-[-8.5rem] py-[17px] pr-120px text-white relative z-10 '>Pikapak es una plataforma logística 100% crowdsourced que coordina transportistas y depósitos en una red de movimiento de mercaderías 24x7x365.</p>
                        <div className=''>
                            <button className='xl:text-[16px] text-[14px] bg-transparent text-[#fff] center xl:min-w-[140px] min-w-[140px] py-[12px] xl:py-[18px]  my-[15px] leading-[17px] transition-all easy-in duration-[0.15s] inline-block px-[16px] py-[18px] no-underline uppercase rounded-sm outline-none tracking-[2px] font-extrabold whitespace-nowrap border-solid border-2 border-white hover:bg-[#ffb200] hover:text-white  hover:shadow-lg hover:shadow-indigo-900/90' > <a href="#contact" >EMPEZAR </a></button>
                        </div>
                    </div>
                </div>
                <div className='h-[0.5rem] border-b-8 border-white'>
                </div>
                <div className='max-w-full flex flex-col items-center py-4 my-6'>
                    <div className='flex flex-col items-center mb-2'>
                        <h2 className='text-white text-2xl mb-2'>
                            <span className='mr-2 text-[#ffb200] font-bold'>Suscribite</span> para novedades
                        </h2>

                        <div className='flex flex-col items-center w-full'>
                            <form onSubmit={handleSubmit} className='flex flex-col items-center  w-full'>
                                <input
                                    className='xl:w-full w-[80%] 
                                    border-2 border-white 
                                    pl-2 py-2
                                    rounded-xl 
                                    focus:shadow-lg focus:shadow-indigo-200/80
                                '
                                    placeholder='Escribe tu Email...'
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {formErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                )}

                                <button className='
                                text-[16px] bg-transparent text-white
                                mt-4 xl:min-w-[130px] px-4 py-2
                                border-2 border-white 
                                rounded-xl uppercase font-bold tracking-[2px]
                                hover:bg-[#ffb200] hover:text-black transition-all
                                '
                                    type="submit"
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[0.5rem] border-b-8 border-white'>
            </div>

            {/* Modal de éxito */}
            {successModalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h4 className="text-xl font-semibold mb-2">¡Enviado con Exito!</h4>
                        <p className="text-gray-600 mb-4">Gracias, te mantendremos informado de todas las novedades!</p>
                        <button
                            onClick={closeSuccessModal}
                            className="px-4 py-2 bg-[#ffb200] hover:bg-[#e8a200] text-white rounded-md">
                            Cerrar
                        </button>
                    </div>
                </div>
            )}


        </>
    );
};
export default Home;
