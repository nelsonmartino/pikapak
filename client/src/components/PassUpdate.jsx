/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import validationsPass from '../utils/validationsPass.js'
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function PassUpdate() {
    const [formErrors, setFormErrors] = useState({});
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);


    const [formStatus, setFormStatus] = useState('');
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [queryKey, setQueryKey] = useState(null);

    // Función para alternar mostrar/ocultar contraseña
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const navigate = useNavigate();

    useEffect(() => {
        // Extraer la key del query string
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key"); // Cambia "key" por el nombre del parámetro en tu URL
        if (key) {
            setQueryKey(key);
        }
    }, []);

    // Maneja el cambio de cada input y actualiza el estado del formulario
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validationsPass(formData);

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        // Excluir confirmNewPassword del payload
        const { confirmNewPassword, ...dataToSend } = formData;
        dataToSend.key = queryKey; // Añadir la key al payload


        try {
            const response = await axios.put('http://localhost:3001/users/update', dataToSend, {
                withCredentials: true, // Para enviar cookies si es necesario
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verifica la respuesta y procesa los datos
            console.log("respuesta front:", response.data);
            setSuccessModalIsOpen(true);
            setFormErrors({});
            // Reseteo
            setFormData({
                newPassword: '',
                confirmNewPassword: '',
            });


        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            setFormErrors({ ...formErrors, newPassword: errorMessage });
            console.error("Error en la solicitud:", errorMessage);
        }
    }


    function closeSuccessModal() {
        setSuccessModalIsOpen(false);
        navigate("/login");
    }

    return (
        <>
            <div className="xl:w-1/2 flex flex-col xl:m-auto xl:mt-[7%] mx-4 ">
                <div className="flex  flex-col ">
                    <div>
                        <h2 className="flex flex-col items-start justify-end text-2xl ml-6 mt-8 xl:mt-0 mb-2 xl:ml-2 font-semibold flex h-full">
                            Escriba su nueva contraseña:
                        </h2>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-full flex flex-col rounded-xl shadown-xl p-8 xl:px-8  border-2 border-[#3C047B] border-solid shadow-xl gap-4">
                    <div className="w-full mb-4">
                        <label className="block text-black text-sm font-bold mb-2 " htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                            id="newPassword"
                            type={showPassword ? 'text' : 'password'}
                            name="newPassword"
                            placeholder="Escriba su nueva contraseña 6 digitos"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                        />
                        {/* Icono para mostrar/ocultar la contraseña */}
                        <span className=" absolute cursor-pointer text-gray-700 z-0 mt-2 ml-2" onClick={toggleShowPassword}>
                            {!showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {formErrors.newPassword
                            && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.newPassword}</p>
                            )}
                    </div>
                    <div className="w-full xl:mb-0 mb-4">
                        <label className="block text-black text-sm font-bold mb-2 xl:mb-2 " htmlFor="confirmPassword">
                            Confirmar Contraseña
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                            type={showConfirmPassword ? 'text' : 'password'}
                            // Alternar entre 'text' y 'password'
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            placeholder="Reescriba su Contraseña"
                            value={formData.confirmNewPassword}
                            onChange={handleInputChange}
                        />
                        {/* Icono para mostrar/ocultar la confirmación de contraseña */}
                        <span className=" absolute cursor-pointer z-0 text-gray-700 mt-2 ml-2" onClick={toggleShowConfirmPassword}>
                            {!showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {formErrors.confirmNewPassword
                            && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.confirmNewPassword}</p>
                            )}
                    </div>

                    {/* Submit Button */}
                    <div className="xl:mb-2 w-full flex-wrap flex justify-center ">
                        <button
                            className="xl:w-1/2 bg-[#3C047B] text-pink-300 hover:bg-[#3C028B] hover:text-white font-sans text-white font-bold px-4 py-2 mb-4 xl:mb-0 rounded flex-wrap focus:outline-none focus:ring-2 focus:white hover:shadow-xl"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>

                {/* Modal de éxito */}
                {successModalIsOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                            <h4 className="text-xl font-semibold mb-2">¡Modificaste tu contraseña!</h4>
                            <p className="text-gray-600 mb-4">Volvé a loguearte con tu nueva contraseña.</p>
                            <button
                                onClick={closeSuccessModal}
                                className="px-4 py-2 bg-[#ffb200] hover:bg-[#e8a200] text-white rounded-md">
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default PassUpdate;