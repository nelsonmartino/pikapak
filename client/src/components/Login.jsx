import { useState } from "react";
import camionAbeja from '../assets/imgs/Camion-Abeja.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import validationsLogin from '../utils/validationsLogin.js'
import { Link } from 'react-router-dom';

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        whatsapp: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Función para alternar mostrar/ocultar contraseña
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    // Maneja el cambio de cada input y actualiza el estado del formulario
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });


    }


    // Maneja el envío del formulario
    function handleSubmit(e) {
        e.preventDefault();
        const errors = validationsLogin(formData);
        console.log(errors)

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setSuccessModalIsOpen(false);
        } else {
            console.log('Formulario enviado con éxito:', formData);
            // setModalContactIsOpen(false); // Cierra el modal de formulario
            setSuccessModalIsOpen(true); // Abre el modal de éxito
            setFormErrors({});
            // Reseteo
            setFormData({
                name: '',
                surname: '',
                whatsapp: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        }
    }

    function closeSuccessModal() {
        setSuccessModalIsOpen(false);
    }

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div className="flex content-center justify-center flex-col md:flex-row  w-full h-full xl:fixed">


                <div className="flex justify-center  xl:w-full md:w-1/2  hidden xl:block bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg shadow-lg ">
                    <div className="flex justify-center items-center pt-[6%]  w-full">
                        <h1 className=" text-4xl font-semibold text-black ">
                            <Link to="/" className="text-[#ffb200] p-2 hover:shadow-lg">
                                Pikapak
                            </Link>
                        </h1>
                    </div>
                    <img src={camionAbeja} alt="Camion-Abeja" className="w-[65%] xl:mt-[7%]  m-auto" />
                </div>


                <div className="flex flex-col justify-center xl:w-[70rem] items-center text-white  m-2 xl:mt-[2rem] ">

                    <div className="xl:hidden flex justify-center items-center   w-full">
                        <h1 className=" text-3xl font-semibold text-black my-2">
                            <Link to="/" className="text-[#ffb200] hover:shadow-lg">
                                Pikapak
                            </Link>
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full flex flex-col    rounded-xl shadown-xl p-8 xl:px-8 xl:m-[10px] justify-center border-2 border-grey-500 border-solid">

                        {!isLogin && (
                            <div className="flex flex-wrap w-full xl:mb-4">
                                <div className='w-full xl:w-1/2 pr-2 xl:mb-0 mb-4'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                                    <input
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        name="name"
                                        placeholder="Ej. Daniel"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.name && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                                    )}
                                </div>

                                <div className='w-full xl:w-1/2 xl:mb-0 mb-4'>
                                    <label className="block text-sm font-bold mb-2 text-gray-700">Apellido</label>
                                    <input
                                        type="text"
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        name="surname"
                                        placeholder="Ej. Martinez"
                                        value={formData.surname}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.surname && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.surname}</p>
                                    )}
                                </div>
                            </div>
                        )}



                        <div className="flex flex-wrap w-full xl:mb-4">
                            <div className="flex xl:w-full ">
                                {!isLogin && (
                                    <div className='w-full mr-2'>
                                        <label className="block text-sm font-bold mb-2 text-gray-700">WhatsApp</label>
                                        <input
                                            type="text"
                                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            name="whatsapp"
                                            placeholder="Ej. +54 911 123 4567"
                                            value={formData.whatsapp}
                                            onChange={handleInputChange}
                                        />
                                        {formErrors.whatsapp && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.whatsapp}</p>
                                        )}
                                    </div>

                                )}
                                <div className="flex w-full mb-6">
                                    {/* Email Input */}
                                    <div className={`w-full ${!isLogin ? 'w-full' : ''} `}>
                                        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className=" appearance-none border rounded min-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Ej. micorreo@mail.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />

                                        {formErrors.email && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>
                            </div>


                            <div className="w-full ${!isLogin ? 'xl:w-1/2' : ''}  mb-4  ">
                                <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="password">
                                    Contraseña
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    // Alternar entre 'text' y 'password'
                                    name="password"
                                    placeholder="Escriba su contraseña 6 digitos"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                {/* Icono para mostrar/ocultar la contraseña */}
                                <span className=" absolute cursor-pointer text-gray-700 z-0 mt-2 ml-2" onClick={toggleShowPassword}>
                                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>

                                {formErrors.password
                                    && (
                                        <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
                                    )}
                            </div>


                            {!isLogin && (
                                <div className="w-full xl:mb-0 mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2 xl:mb-2 " htmlFor="confirmPassword">
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        // Alternar entre 'text' y 'password'
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Reescriba su Contraseña"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                    {/* Icono para mostrar/ocultar la confirmación de contraseña */}
                                    <span className=" absolute cursor-pointer z-0 text-gray-700 mt-2 ml-2" onClick={toggleShowConfirmPassword}>
                                        {!showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                    {formErrors.confirmPassword
                                        && (
                                            <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
                                        )}
                                </div>
                            )}
                        </div>


                        {/* Submit Button */}
                        <div className="xl:mb-2 w-full flex-wrap flex justify-center ">
                            <button
                                className="xl:w-1/2 bg-[#3C047B] text-pink-300 hover:bg-[#3C028B] hover:text-white font-sans text-white font-bold px-4 py-2 mb-4 xl:mb-0 rounded flex-wrap focus:outline-none focus:ring-2 focus:white"
                                type="submit"

                            >
                                {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
                            </button>
                        </div>

                        {/* Toggle Link */}
                        <div className="inline justify-center w-full">
                            <p className="w-full inline text-center text-gray-500 text-sm">
                                {isLogin ? (
                                    <span className="flex w-full gap-4 justify-center">
                                        ¿No tienes una cuenta?{' '}
                                        <button
                                            type="button"
                                            onClick={toggleForm}
                                            className="text-[#3C043B] self-center  h-full   hover:text-[#930f7f] focus:outline-none hover:underline  hover:text-[#930f7f]"
                                        >
                                            Regístrate
                                        </button>
                                    </span>
                                ) : (
                                    <span className="flex w-full gap-4 justify-center  ">
                                        ¿Ya tienes una cuenta?{' '}
                                        <button
                                            type="button"
                                            onClick={toggleForm}
                                            className="text-[#3C043B] self-center  h-full  hover:text-[#930f7f] hover:underline focus:outline-none "
                                        >
                                            Inicia Sesión
                                        </button>
                                    </span>
                                )}
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal de éxito */}
            {successModalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                        <h4 className="text-xl font-semibold mb-2">¡Registro exitoso!</h4>
                        <p className="text-gray-600 mb-4">Gracias por registrarte. Te enviaremos un mail de confirmación a la brevedad.</p>
                        <button
                            onClick={closeSuccessModal}
                            className="px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-white rounded-md">
                            Cerrar
                        </button>
                    </div>
                </div>

            )}
        </>
    );

}

export default Login;