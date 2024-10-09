import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { PiNumberCircleOneDuotone } from "react-icons/pi";
import { PiNumberCircleTwoDuotone } from "react-icons/pi";
import { PiNumberCircleThreeDuotone } from "react-icons/pi";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

import camionAbeja from '../assets/imgs/Camion-Abeja.png'
import hombreCaja from '../assets/imgs/pikapak-todos.png'




function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? 'rotate-180' : ''
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

function GeneraIngresos() {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (

    //FALTA LINKEAR ANCLA
    // <div id="unite">
    <div
      id="accordion "
      className="flex flex-col items-center justify-center py-[4rem] my-2 text-white bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg"

    >
      <h1
        className="text-2xl xl:text-4xl font-bold pb-6 pt-5 text-[#ffb200] drop-shadow-[0_0_5px_#ffb200] drop-shadow-[0_0_5px_#3e047c] hover:drop-shadow-[0_0_20px_#ffb200]"
      >
        Generá Ingresos Extra YA!
      </h1>
      <h3 className="xl:text-2xl text-xl font-medium pt-2 mb-4 ml-4 text-center">
        Sin gastos, sin inversión, <br />¡solo ganancias y mientras haces tus cosas!
      </h3>

      {/* CONTENEDOR DE ACORDEONES */}
      <div className="flex flex-col  w-full xl:items-center xl:p-[10%] xl:mt-[-7rem] xl:mb-[-6rem]">

        <div className='flex  justify-center p-6 flex-col-reverse  xl:flex-row  '>


          {/* CONTENEDOR DERECHO (ACORDEONES) */}
          <div className="flex flex-col flex-wrap w-full xl:w-[50%] xl:p-4 xl:space-y-8 mb-8 items-center ">
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-[#2589BD] font-semibold hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Podes ser <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span> si:
              </AccordionHeader>
              <AccordionBody>
                <ul className=" list-disc list-inside ml-8 text-white space-y-4">

                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className=' w-full'>
                      Tenes un vehículo o te movés en transporte de corta o larga
                      distancia.
                    </p>
                  </div>
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Te movés dentro de la ciudad o entre ciudades
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-[#2589BD] font-semibold hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Generás dinero como <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span> si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Llevas uno o más paquetes entre depositos (hubs) mientras te
                      movés haciendo tus cosas.
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Ventajas de ser nuestro <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span>:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Sin días ni horarios predefinidos, abrís la app cuando estás
                      disponible.
                    </p>
                  </div>
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Vos elegís los viajes a realizar de acuerdo con tu
                      conveniencia de movimiento. Si tus movimientos coinciden con
                      los paquetes a mover, aceptas el envío y lo llevas.
                    </p>
                  </div>
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Llevas paquetes ente depósitos (hubs) con amplia
                      disponibilidad horaria, no tenés que esperar a nadie.
                    </p>
                  </div>
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Sin intercambio de dinero papeles o firmas. Solo escaneas un
                      QR y listo. El dinero que ganaste va a tu cuenta.
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Cómo funciona?
              </AccordionHeader>
              <AccordionBody>
                <ol className="list-decimal list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <PiNumberCircleOneDuotone className='mr-2  text-[#ffb200] font-extrabold text-2xl' fill='#ffb200' />
                    <p className="w-full">
                      Cuándo estés por moverte desde A hacia B, entrás en la app y
                      consultás si hay algún paquete para llevar que coincida con
                      tu itinerario.
                    </p>
                  </div>
                  <div className='flex'>
                    <PiNumberCircleTwoDuotone className='mr-2 text-[#ffb200] font-extrabold text-2xl' />
                    <p className="w-full">
                      Si hay algo que te interese aceptás el envío, lo buscás por
                      A y lo llevás a B. Escaneás el paquete en A con la app y el
                      Hub de destino (depósito) lo escanea en B.
                    </p>
                  </div>
                  <div className='flex'>
                    <PiNumberCircleThreeDuotone className='mr-2 text-[#ffb200] font-extrabold text-2xl' />
                    <p className="w-full">
                      <span className="font-semibold">Listo!</span> Ganaste dinero
                      mientras hacías tus movimientos, sin horarios, sin
                      presiones, de paso. ¡Un éxito!
                    </p>
                  </div>
                </ol>
              </AccordionBody>
            </Accordion>
          </div>


          {/* CONTENEDOR TITULO-IMAGEN */}
          <div className="flex flex-col xl:w-[50%] w-full">
            <h2 className=" xl:text-3xl text-2xl font-medium text-center text-white mb-6 xl:mr-8">
              Obtené una fuente de ingresos extra transportando paquetes
              mientras viajas por tus asuntos
            </h2>
            <img
              src={camionAbeja}
              alt="camion de paquetes con abeja"
              className=" h-auto xl:max-w-[380px] max-w-[340px] mt-2 self-center"
            />
          </div>
        </div>



        {/* ACORDEON 2 */}
        {/* CONTENEDOR DERECHO (ACORDEONES) */}
        <div className='flex flex-wrap justify-center p-6 '>

          {/* CONTENEDOR TITULO-IMAGEN */}
          <div className="flex flex-col xl:w-[50%] w-full">
            <h2 className=" xl:text-3xl text-2xl font-medium text-center text-white mb-6 xl:ml-4">
              Obtené una fuente de ingresos extra con el espacio disponible que
              no usas y potenciá tu negocio dándole más visibilidad en la web
            </h2>
            <img
              src={hombreCaja}
              alt="hombre saliendo de una caja grande con los brazos abiertos"
              className="flex h-auto xl:max-w-[380px] max-w-[380px] mt-2 self-center mb-6 ml-[15%]"></img>
          </div>

          <div className="flex flex-col flex-wrap w-full xl:w-[50%] xl:p-4 xl:space-y-8 mb-8 items-center ">
            <Accordion open={open === 4} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Podés ser <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>HUB</span> (depósito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Tenés lugar disponible en tu casa, local, comercio o lugar
                      de trabajo y no necesitas enviar tus ventas.
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Generás dinero como <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>HUB</span> (depósito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Almacenás temporalmente paquetes y los entregas cuándo te lo
                      requieren los transportistas o destinatarios finales,
                      mientras haces tus cosas.
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Ventajas de ser nuestro <span className='text-[#ffb200] hyphens-auto xl:text-xl text-xl' style={{ display: 'contents' }}>HUB</span> (depósito):
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Vos elegís los días y horarios en los que estas disponible
                      en tu casa, local, comercio o trabajo.
                    </p>
                  </div>
                  <div className='flex'>
                    <GiCheckMark className='mr-2 text-[#ffb200] font-extrabold text-xl' />
                    <p className='w-full'>
                      Sin intercambio de dinero, papeles o firmas. Solo escaneas un
                      QR y listo. El dinero que ganaste va a tu cuenta.
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(8)}
                className="text-[#2589BD] font-semibold  hover:text-[#ffb200] xl:text-xl text-xl"
              >
                Cómo funciona?
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-decimal list-inside ml-8 text-white space-y-4">
                  <div className='flex'>
                    <PiNumberCircleOneDuotone className='mr-2  text-[#ffb200] font-extrabold text-2xl' fill='#ffb200' />
                    <p className="w-full">
                      Cuando un transportista se presente con un paquete, escaneas
                      el QR y lo guardás en tu lugar disponible.
                    </p>
                  </div>
                  <div className='flex'>
                    <PiNumberCircleTwoDuotone className='mr-2 text-[#ffb200] font-extrabold text-2xl' />
                    <p className="w-full">
                      Cuándo un destinatario final se presente a retirar un
                      paquete, escaneas el QR y se lo entregás
                    </p>
                  </div>
                  <div className='flex'>
                    <PiNumberCircleThreeDuotone className='mr-2 text-[#ffb200] font-extrabold text-2xl' />
                    <p className="w-full">
                      <span className="font-semibold">Listo!</span> Ganaste dinero
                      mientras hacías tus cosas. Sin gastos extra, sin presiones,
                      mientras estás ahí. ¡Un éxito!
                    </p>
                  </div>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>

        </div>
      </div>
    </div>
    // </div >


  )
}

export default GeneraIngresos;
