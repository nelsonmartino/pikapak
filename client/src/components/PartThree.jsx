import gPlay from '../assets/imgs/disponible-en-google-play-badge-2.png'

function PartThree() {
  return (
    <div className="flex flex-col items-center justify-center pt-4 min-h-screen text-[#3e047c]">
      <h2
        className="text-[36px] text-3xl canada-type-gibson,sans-serif font-weight-700
 text-black-700 pb-3 pt-5"
      >
        Genera Ingresos Extra YA!
      </h2>
      <h3 className="text-2xl font-medium text-black-500 pt-3 pb-6">
        Sin gastos, sin inversion, ¡solo ganancias y mientras haces tus cosas!
      </h3>
      {/* contenedor de dos columnas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full  px-4">
        {' '}
        {/*max-w-4xl */}
        {/* contenedor primer columna columnas */}
        <div className="flex items-center justify-center lg:p-[10%] xl:p-[15%] border-gray-300 p8">
          <div className="text-center">
            <h5 className="text-2xl font-medium text-black-400">
              Obtene una fuente de ingresos extra transportando paquetes
              mientras viajas por tus asuntos
            </h5>
            <br />
            <dir className="text-start">
              <span>
                <b>Podes ser TRANSPORTISTA si:</b>
              </span>
              <p>
                <div className="p-4">
                  <b className="mb-2"></b>
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Tenes un vehiculo o te moves en transporte de corta o
                      larga distancia.
                    </li>
                    <li className="mb-2">
                      Te moves dentro de la ciudad o entre ciudades
                    </li>
                  </ul>
                </div>
              </p>
            </dir>

            <dir className="text-start">
              <span>
                <b>Ganas plata como TRANSPORTISTA si:</b>
              </span>
              <p>
                <div className="p-4">
                  <b className="mb-2"></b>
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Llevas uno o más paquetes entre depositos (hubs) mientras
                      te moves haciendo tus cosas.
                    </li>
                  </ul>
                </div>
              </p>
            </dir>

            <dir className="text-start">
              <span>
                <b>Ventajas de ser nuestro TRANSPORTISTA:</b>
              </span>
              <p>
                <div className="p-4">
                  <b className="mb-2"></b>
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Sin días ni horarios predefinidos, abris la app cuando
                      estas disponible.
                    </li>
                    <li className="mb-2">
                      Vos elegis los viajes a realizar de acuerdo con tu
                      conveniencia de movimiento. Si tus movimientos coinciden
                      con los paquetes a mover, aceptas el envio y lo llevas.
                    </li>
                    <li className="mb-2">
                      Llevas paquetes ente depositos (hubs) con amplia
                      disponibilidad horaria, no tenes que esperar a nadie.
                    </li>
                    <li className="mb-2">
                      Sin intercambio de dinero papeles o firmas. Solo escaneas
                      un QR y listo. El dinero que ganaste va a tu cuenta.
                    </li>
                  </ul>
                </div>
              </p>
            </dir>
            <div className="flex flex-row justify-evenly pb-4 pt-0 mt-2 w-full">
              <button className="w-1/3" type="button">
                <img src={gPlay} alt="Google Play" />
              </button>
              <a
                className="bg-[#3e047c] py-2 px-4 border border-2 border-[#3e047c] text-center text-xs font-semibold text-white text-nowrap transition-all shadow-md uppercase hover:shadow-lg hover:bg-transparent hover:text-[#3e047c]"
                type="button"
                href="#quieroTransportar"
              >
                + info
              </a>
            </div>
          </div>
        </div>{' '}
        {/* fin contenedor primer columna columnas */}
        <div className="flex justify-center lg:p-[10%] xl:p-[15%] p8">
          <div className="text-center">
            <h5 className="text-2xl font-medium text-black-400">
              Obtene una fuente de ingresos extra con el espacio disponible que
              no usas y potencia tu negocio dándole más visibilidad en la web
            </h5>
            <br />
            <dir className="text-start">
              <span>
                <b>Podes ser HUB (deposito) si:</b>
              </span>
              <p>
                <div className="p-4">
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Tenes lugar disponible en tu casa, local, comercio o lugar
                      de trabajo y no necesitas enviar tus ventas.
                    </li>
                  </ul>
                </div>
              </p>
            </dir>

            <dir className="text-start">
              <span>
                <b>Ganas plata como HUB (deposito) si:</b>
              </span>
              <p>
                <div className="p-4">
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Almacenas temporalmente paquetes y los entregas cuando te
                      lo requieren los transportistas o destinatarios finales,
                      mientras haces tus cosas
                    </li>
                  </ul>
                </div>
              </p>
            </dir>

            <dir className="text-start">
              <span>
                <b>Ventajas de ser nuestro HUB (deposito):</b>
              </span>
              <p>
                <div className="p-4">
                  <ul className="list-disc list-inside ml-8">
                    <li className="mb-2">
                      Vos elegis los días y horarios en los que estas disponible
                      en tu casa, local, comercio otrabajo.
                    </li>
                    <li className="mb-2">
                      Sin intercambio de dinero, papeles o firmas. Soloescaneas
                      un QR y listo. El dinero que ganaste va a tu cuenta.
                    </li>
                  </ul>
                </div>
              </p>
            </dir>

            {/*-------------------------------------------------------- */}
            <div className="flex flex-row justify-evenly pb-4 pt-0 mt-2 w-full">
              <button className="w-1/3" type="button">
                <img src={gPlay} alt="Google Play" />
              </button>
              <a
                className="bg-[#3e047c] py-2 px-4 border border-2 border-[#3e047c] text-center text-xs font-semibold text-white text-nowrap transition-all shadow-md uppercase hover:shadow-lg hover:bg-transparent hover:text-[#3e047c]"
                type="button"
                href="#quieroAlmacenar"
              >
                + info
              </a>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* fin contenedor de dos columnas */}
    </div>
  )
}

export default PartThree
