import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PassRecovery() {
    const [formErrors, setFormErrors] = useState({});
    const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Regresa a la página anterior
    };


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
        setFormErrors({});

        // Validación de campos vacíos
        const errors = {};
        if (!formData.email) {
            errors.email = 'Debe ingresar su Email';
        }
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/recovery', formData, {
                withCredentials: true, // Para enviar cookies si es necesario
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            const resJSON = await response.json();
            console.log('Respuesta de la API:', resJSON); // Verifica la respuesta

            if (resJSON.message == "Recovery email sent") {
                setSuccessModalIsOpen(true);
                setFormData({ email: '' });
            } else {
                setFormErrors({ general: 'Mail incorrecto' });
                console.log('Respuesta de la API:', resJSON); // Verifica la respuesta

            }
        } catch (error) {
            console.error('Error', error);
            setFormErrors({ general: 'Error en el mail ingresado' });
        }
    };

    function closeSuccessModal() {
        setSuccessModalIsOpen(false);
    }

    return (
        <div className="xl:w-full xl:h-full">
            <button onClick={handleGoBack} className="text-blue-500 pl-10 pt-6 hover:text-[#e8a200] underline">
                Volver
            </button>

            <div className="flex items-center justify-center flex-col xl:min-w-1/2 ">

                <div className="flex flex-col justify-start  xl:w-1/2  mb-4">
                    <h2 className="flex flex-col items-start justify-end text-xl font-semibold flex h-full">
                        Recuperar contraseña</h2>
                </div>

                <form onSubmit={handleSubmit} className="xl:w-[50%] xl:p-10 h-full flex flex-col rounded-xl shadown-xl justify-center border-2 border-[#3C047B] border-solid shadow-xl">
                    <div className="flex items-center w-full h-full  xl:mb-4 ">
                        <div className="flex w-full ">

                            <div className="flex w-full  flex-col items-center">
                                {/* Email Input */}
                                <div className='w-1/2'>
                                    <label className="block text-black text-sm font-bold mb-2 " htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Ej. micorreo@mail.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />

                                    {formErrors.email && (
                                        <p className="text-red-500 text-sm mb-4">{formErrors.email}</p>
                                    )}
                                    {/* Mostrar error general */}
                                    {formErrors.general && (
                                        <p className="text-red-500 text-sm mb-4">{formErrors.general}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="xl:mb-2 xl:w-1/2 flex justify-center pt-4">
                                    <button
                                        className="xl:w-[50%]  items-center justify-center bg-[#3C047B] text-pink-300 hover:bg-[#3C028B] hover:text-white font-sans text-white font-bold px-2 py-2 mb-4 xl:text-sm xl:mb-0 rounded flex-wrap focus:outline-none focus:ring-2 focus:white hover:shadow-xl"
                                        type="submit"

                                    >
                                        Enviar
                                    </button>
                                </div>


                                {/* Modal de éxito */}
                                {successModalIsOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
                                            <h4 className="text-xl font-semibold mb-2">Envío exitoso!</h4>
                                            <p className="text-gray-600 mb-4">Te enviámos un mail de recuperación a la brevedad.</p>
                                            <button
                                                onClick={closeSuccessModal}
                                                className="px-4 py-2 bg-[#ffb200] hover:bg-[#e8a200] text-white rounded-md">
                                                Cerrar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )

}

export default PassRecovery