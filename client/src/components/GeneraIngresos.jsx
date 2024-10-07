import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

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

    <div id="unite">
      <div
        id="accordion "
        className="flex flex-col items-center justify-center py-[4rem] my-2 text-white bg-[url('./assets/imgs/Background_header.png')] bg-cover bg-center drop-shadow-lg"

      >
        <h1
          className="text-2xl xl:text-4xl font-bold pb-6 pt-5 text-[#ffb200] drop-shadow-[0_0_5px_#ffb200] drop-shadow-[0_0_5px_#3e047c] hover:drop-shadow-[0_0_20px_#ffb200]"
        >
          Generá Ingresos Extra YA!
        </h1>
        <h3 className="xl:text-2xl text-xl font-medium py-3 ml-4 text-center">
          Sin gastos, sin inversión, <br />¡solo ganancias y mientras haces tus cosas!
        </h3>
        <h2 />
        <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-14 w-full  px-4">
          <div className="flex flex-col items-center justify-center lg:p-[5%] xl:p-[10%] border-gray-300 p8">
            <h5 className=" xl:text-2xl text-xl font-medium text-white mb-6">
              Obtené una fuente de ingresos extra transportando paquetes
              mientras viajas por tus asuntos:
            </h5>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-[#3e047c] font-semibold hover:text-[#ffb200]"
              >
                Podes ser <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span> si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2 ">
                    Tenes un vehículo o te movés en transporte de corta o larga
                    distancia.
                  </li>
                  <li className="mb-2">
                    Te movés dentro de la ciudad o entre ciudades
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-[#3e047c] font-semibold hover:text-[#ffb200]"
              >
                Generás dinero como <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span> si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2">
                    Llevas uno o más paquetes entre depositos (hubs) mientras te
                    movés haciendo tus cosas.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200]"
              >
                Ventajas de ser nuestro <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>TRANSPORTISTA</span>:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2">
                    Sin días ni horarios predefinidos, abrís la app cuando estás
                    disponible.
                  </li>
                  <li className="mb-2">
                    Vos elegís los viajes a realizar de acuerdo con tu
                    conveniencia de movimiento. Si tus movimientos coinciden con
                    los paquetes a mover, aceptas el envío y lo llevas.
                  </li>
                  <li className="mb-2">
                    Llevas paquetes ente depósitos (hubs) con amplia
                    disponibilidad horaria, no tenés que esperar a nadie.
                  </li>
                  <li className="mb-2">
                    Sin intercambio de dinero papeles o firmas. Solo escaneas un
                    QR y listo. El dinero que ganaste va a tu cuenta.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200]"
              >
                Cómo funciona?
              </AccordionHeader>
              <AccordionBody>
                <ol className="list-decimal list-inside ml-8 text-white">
                  <li className="mb-2 ">
                    Cuándo estés por moverte desde A hacia B, entrás en la app y
                    consultás si hay algún paquete para llevar que coincida con
                    tu itinerario.
                  </li>
                  <li className="mb-2">
                    Si hay algo que te interese aceptás el envío, lo buscás por
                    A y lo llevás a B. Escaneás el paquete en A con la app y el
                    Hub de destino (depósito) lo escanea en B.
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Listo!</span> Ganaste dinero
                    mientras hacías tus movimientos, sin horarios, sin
                    presiones, de paso. ¡Un éxito!
                  </li>
                </ol>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="flex flex-col justify-center lg:p-[5%] xl:p-[10%] p8">
            <h5 className="xl:text-2xl text-xl font-medium  mb-6">
              Obtené una fuente de ingresos extra con el espacio disponible que
              no usas y potenciá tu negocio dándole más visibilidad en la web:
            </h5>
            <Accordion open={open === 4} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200] xl:text-2xl text-xl"
              >
                Podés ser <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>HUB</span> (depósito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2">
                    Tenés lugar disponible en tu casa, local, comercio o lugar
                    de trabajo y no necesitas enviar tus ventas.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200] xl:text-2xl text-xl"
              >
                Generás dinero como <span className='text-[#ffb200] hyphens-auto' style={{ display: 'contents' }}>HUB</span> (depósito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2">
                    Almacenás temporalmente paquetes y los entregas cuándo te lo
                    requieren los transportistas o destinatarios finales,
                    mientras haces tus cosas.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200]"
              >
                Ventajas de ser nuestro <span className='text-[#ffb200] hyphens-auto xl:text-2xl text-xl' style={{ display: 'contents' }}>HUB</span> (depósito):
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8 text-white">
                  <li className="mb-2">
                    Vos elegís los días y horarios en los que estas disponible
                    en tu casa, local, comercio o trabajo.
                  </li>
                  <li className="mb-2">
                    Sin intercambio de dinero, papeles o firmas. Solo escaneas un
                    QR y listo. El dinero que ganaste va a tu cuenta.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(8)}
                className="text-[#3e047c] font-semibold  hover:text-[#ffb200] xl:text-2xl text-xl"
              >
                Cómo funciona?
              </AccordionHeader>
              <AccordionBody>
                <ol className="list-decimal list-inside ml-8 text-white">
                  <li className="mb-2">
                    Cuando un transportista se presente con un paquete, escaneas
                    el QR y lo guardás en tu lugar disponible.
                  </li>
                  <li className="mb-2">
                    Cuándo un destinatario final se presente a retirar un
                    paquete, escaneas el QR y se lo entregás
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Listo!</span> Ganaste dinero
                    mientras hacías tus cosas. Sin gastos extra, sin presiones,
                    mientras estás ahí. ¡Un éxito!
                  </li>
                </ol>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneraIngresos;
