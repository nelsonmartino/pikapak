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
      className={`${
        id === open ? 'rotate-180' : ''
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

function PartThree() {
  const [open, setOpen] = React.useState(1)

  const handleOpen = (value) => setOpen(open === value ? 0 : value)

  return (

    <>
      <div
        id="accordion"
        className="flex flex-col items-center justify-center pt-4 text-[#3e047c]"

      >
        <h2
          className="text-[36px] text-3xl canada-type-gibson,sans-serif font-weight-700
 text-black-700 pb-3 pt-5"
        >
          Genera Ingresos Extra YA!
        </h2>
        <h3 className="text-2xl font-medium text-black-500 py-3">
          Sin gastos, sin inversion, ¡solo ganancias y mientras haces tus cosas!
        </h3>
        <h2 />
        <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-14 w-full  px-4">
          <div className="flex flex-col items-center justify-center lg:p-[5%] xl:p-[10%] border-gray-300 p8">
            <h5 className="text-center text-2xl font-medium text-black-400">
              Obtene una fuente de ingresos extra transportando paquetes
              mientras viajas por tus asuntos
            </h5>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-[#3e047c] font-semibold"
              >
                Podes ser TRANSPORTISTA si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Tenes un vehiculo o te moves en transporte de corta o larga
                    distancia.
                  </li>
                  <li className="mb-2">
                    Te moves dentro de la ciudad o entre ciudades
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-[#3e047c] font-semibold"
              >
                Ganas plata como TRANSPORTISTA si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Llevas uno o más paquetes entre depositos (hubs) mientras te
                    moves haciendo tus cosas.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-[#3e047c] font-semibold"
              >
                Ventajas de ser nuestro TRANSPORTISTA:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Sin días ni horarios predefinidos, abris la app cuando estas
                    disponible.
                  </li>
                  <li className="mb-2">
                    Vos elegis los viajes a realizar de acuerdo con tu
                    conveniencia de movimiento. Si tus movimientos coinciden con
                    los paquetes a mover, aceptas el envio y lo llevas.
                  </li>
                  <li className="mb-2">
                    Llevas paquetes ente depositos (hubs) con amplia
                    disponibilidad horaria, no tenes que esperar a nadie.
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
                className="text-[#3e047c] font-semibold"
              >
                Como funciona?
              </AccordionHeader>
              <AccordionBody>
                <ol className="list-decimal list-inside ml-8">
                  <li className="mb-2">
                    Cuando estés por moverte desde A hacia B, entrás en la app y
                    consultás si hay algún paquete para llevar que coincida con
                    tu itinerario
                  </li>
                  <li className="mb-2">
                    Si hay algo que te interese aceptás el envío, lo buscás por
                    A y lo llevás a B. Escaneás el paquete en A con la app y el
                    Hub de destino (depósito) lo escanea en B
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Listo!</span> Ganaste plata
                    mientras hacías tus movimientos, sin horarios, sin
                    presiones, de paso. ¡Un éxito!
                  </li>
                </ol>
              </AccordionBody>
            </Accordion>
          </div>
          <div className="flex flex-col justify-center lg:p-[5%] xl:p-[10%] p8">
            <h5 className="text-center text-2xl font-medium text-black-400">
              Obtene una fuente de ingresos extra con el espacio disponible que
              no usas y potencia tu negocio dándole más visibilidad en la web
            </h5>
            <Accordion open={open === 4} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-[#3e047c] font-semibold"
              >
                Podes ser HUB (deposito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Tenes lugar disponible en tu casa, local, comercio o lugar
                    de trabajo y no necesitas enviar tus ventas.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="text-[#3e047c] font-semibold"
              >
                Ganas plata como HUB (deposito) si:
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Almacenas temporalmente paquetes y los entregas cuando te lo
                    requieren los transportistas o destinatarios finales,
                    mientras haces tus cosas
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={1} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className="text-[#3e047c] font-semibold"
              >
                Ventajas de ser nuestro HUB (deposito):
              </AccordionHeader>
              <AccordionBody>
                <ul className="list-disc list-inside ml-8">
                  <li className="mb-2">
                    Vos elegis los días y horarios en los que estas disponible
                    en tu casa, local, comercio otrabajo.
                  </li>
                  <li className="mb-2">
                    Sin intercambio de dinero, papeles o firmas. Soloescaneas un
                    QR y listo. El dinero que ganaste va a tu cuenta.
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
              <AccordionHeader
                onClick={() => handleOpen(8)}
                className="text-[#3e047c] font-semibold"
              >
                Como funciona?
              </AccordionHeader>
              <AccordionBody>
                <ol className="list-decimal list-inside ml-8">
                  <li className="mb-2">
                    Cuando un transportista se presente con un paquete, escaneas
                    el QR y lo guardás en tu lugar disponible
                  </li>
                  <li className="mb-2">
                    Cuando un destinatario final se presente a retirar un
                    paquete, escaneas el QR y se lo entregás
                  </li>
                  <li className="mb-2">
                    <span className="font-semibold">Listo!</span> Ganaste plata
                    mientras hacías tus cosas. Sin gastos extra, sin presiones,
                    mientras estás ahí. ¡Un éxito!
                  </li>
                </ol>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartThree
