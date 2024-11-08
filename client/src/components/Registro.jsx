import { useState } from 'react'
import camionAbeja from '../assets/imgs/Camion-Abeja.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import validationsRegister from '../utils/validationsRegster.js'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Registro() {
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false)

  // eslint-disable-next-line no-unused-vars
  const [formStatus, setFormStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    whatsapp: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const toggleShowPassword = () => setShowPassword(!showPassword)
  const toggleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  const navigate = useNavigate()

  // Maneja el cambio de cada input y actualiza el estado del formulario
  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const errors = validationsRegister(formData)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...dataToSend } = formData

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/users`,
        dataToSend
      )

      // Verifica la respuesta y procesa los datos
      console.log('respuesta front:', response.data)
      setSuccessModalIsOpen(true)

      setFormErrors({})
      // Reseteo
      setFormData({
        name: '',
        surname: '',
        email: '',
        whatsapp: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message
      setFormErrors({ ...formErrors, email: 'Mail ya registrado' })
      console.error('Error en la solicitud:', errorMessage)
    }
  }

  function closeSuccessModal() {
    setSuccessModalIsOpen(false)
    navigate('/login')
  }

  return (
    <>
      <div className="flex content-center justify-center flex-col md:flex-row  w-full h-full xl:fixed">
        <div className="flex justify-center  xl:w-full md:w-1/2  xl:my-[5px] xl:ml-[5px] hidden xl:block bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg shadow-lg ">
          <Link to="/" >
            <img
              src={camionAbeja}
              alt="Camion-Abeja"
              className="w-[65%] xl:mt-[20%]  m-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center xl:w-[70rem] items-center text-white  m-2 xl:mt-[2rem] ">

          <div className="w-full  xl:m-4">
            <div className="flex justify-center items-center w-full">
              <h1 className=" text-4xl font-semibold text-black  mb-4">
                <Link to="/" className="text-[#ffb200] p-2 ">
                  Pikapak
                </Link>
              </h1>
            </div>
            <form
              onSubmit={handleSubmit}
              className="box-border flex flex-col rounded-xl shadown-xl p-8 justify-center border-2 border-[#3C047B] border-solid m-4"
            >
              <div className="flex flex-wrap w-full xl:mb-4">
                <div className="w-full xl:w-1/2 pr-2 xl:mb-0 mb-4">
                  <label className="block text-black text-sm font-bold mb-1 ">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                    name="name"
                    placeholder="Ej. Daniel"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm absolute xl:top-[30%] xl:left-[58.8%]">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div className="w-full xl:w-1/2 xl:mb-0 mb-4 mt-4 xl:mt-0">
                  <label className="block text-sm font-bold mb-1 text-black">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                    name="surname"
                    placeholder="Ej. Martinez"
                    value={formData.surname}
                    onChange={handleInputChange}
                  />
                  {formErrors.surname && (
                    <p className="text-red-500 text-sm absolute xl:top-[30%] xl:left-[77.5%]">
                      {formErrors.surname}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap w-full xl:mb-4 xl:mt-6">
                <div className="flex w-full mt-4 xl:mt-0">
                  {!isLogin && (
                    <div className="w-full mr-2">
                      <label className="block text-sm font-bold mb-1 text-black">
                        WhatsApp
                      </label>
                      <input
                        type="text"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                        name="whatsapp"
                        placeholder="Ej. +541143218765"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                      />
                      {formErrors.whatsapp && (
                        <p className="text-red-500 text-sm relative xl:top-[5%] xl:left-[1.5%]">
                          {formErrors.whatsapp}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex w-full mb-6">
                    {/* Email Input */}
                    <div className="w-full">
                      <label
                        className="block text-black text-sm font-bold mb-1 "
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className=" appearance-none border rounded min-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ej. micorreo@mail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />

                      {formErrors.email && (
                        <p className="text-red-500 text-sm absolute xl:top-[46%] xl:left-[77.8%]">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full mb-4 mt-4 ">
                  <label
                    className="block text-black text-sm font-bold mb-1 "
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Entre 6 y 14 caracteres"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {/* Icono para mostrar/ocultar la contraseña */}
                  <span
                    className="absolute cursor-pointer text-gray-700 z-0 mt-2 ml-2"
                    onClick={toggleShowPassword}
                  >
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {formErrors.password && (
                    <p className="text-red-500 text-sm absolute xl:top-[61.5%] xl:left-[58.8%]">
                      {formErrors.password}
                    </p>
                  )}
                </div>
                <div className="w-full xl:mb-0 mb-4 mt-4 xl:mt-0">
                  <label
                    className="block text-black text-sm font-bold mb-2 xl:mb-1 xl:mt-6"
                    htmlFor="confirmPassword"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 border-[#3C047B]"
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Reescriba su Contraseña"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  {/* Icono para mostrar/ocultar la confirmación de contraseña */}
                  <span
                    className=" absolute cursor-pointer z-0 text-gray-700 mt-2 ml-2"
                    onClick={toggleShowConfirmPassword}
                  >
                    {!showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {formErrors.confirmPassword && (
                    <p className="text-red-500 text-sm absolute xl:top-[77%] xl:left-[58.8%]">
                      {formErrors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="xl:mb-2 mt-4 w-full flex-wrap flex justify-center ">
                <button
                  className="xl:w-1/2 bg-[#3C047B] text-pink-300 hover:bg-[#3C028B] hover:text-white font-sans text-white font-bold px-4 py-2 mb-4 xl:mb-0 rounded flex-wrap focus:outline-none focus:ring-2 focus:white hover:shadow-xl"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>

              {/* Toggle Link */}
              <div className="inline justify-center w-full">
                <p className="w-full inline text-center text-gray-500 text-sm">
                  {isLogin ? (
                    <span className="flex w-full gap-4 justify-center">
                      ¿No tienes una cuenta?{' '}
                      <Link
                        to="/users"
                        className="text-[#3C043B] self-center  h-full   hover:text-[#930f7f] focus:outline-none hover:underline  hover:text-[#930f7f]"
                      >
                        Regístrate
                      </Link>
                    </span>
                  ) : (
                    <span className="flex w-full gap-4 justify-center">
                      ¿Ya tienes una cuenta?{' '}
                      <Link
                        to="/login"
                        className="text-[#3C043B] self-center  h-full  hover:text-[#930f7f] hover:underline  focus:outline-none"
                      >
                        Inicia Sesión
                      </Link>
                    </span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      {successModalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h4 className="text-xl font-semibold mb-2">¡Registro exitoso!</h4>
            <p className="text-gray-600 mb-4">Bienvenido/a a Pikapak!</p>
            <button
              onClick={closeSuccessModal}
              className="px-4 py-2 bg-[#ffb200] hover:bg-[#e8a200] text-white rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default Registro
