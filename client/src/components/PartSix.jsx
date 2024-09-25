

function PartSix() {
  return (
    <div className='flex flex-col items-center justify-center pt-4 pb-4 min-h-screen bg-[url("./assets/imgs/Background_partTwo.png")] bg-cover bg-center bg-no-repeat text-[#3e047c]'>
      <h2 className='font-extrabold text-3xl text-[#3e047c] pb-3 pt-5'>Quiero Enviar</h2>
      {/*font-semibold text-[#3e047c] text-lg w-[34rem] my-2 */}
      <div className="font-semibold text-lg text-[#3e047c] my-2">Envia paquetes a la velocidad de la luz
      </div>

      {/* contenedor de dos columnas */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 w-full  px-4'> {/*max-w-4xl */}
        {/* contenedor primer columna columnas */}
        <div className='min-h-screen flex items-center justify-center '> {/*lg:p-[10%] xl:p-[15%] border-gray-300 p8 */}
          <div>
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Si lo haces de vez en cuando y NO TENES un local,
                Registrate como Persona</p>
            </div>

            {/* Caja 2 */}
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Generas el envio en la app y armas el paquete.</p>
            </div>

            {/* Caja 3 */}
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Lo llevas al Hub Remitente (deposito) que mas te convenga (hay muchos en la ciudad!)</p>
            </div>
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Listo! Tu paquete viaja rapidísimo a su destino</p>
            </div>
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Cuando le paquete llega, les informamos a vos y al destinatario.</p>
            </div>
          </div>

        </div>
        {/* contenedor segunda columna columnas */}
        <div className='min-h-screen flex  justify-center'>
          <div>
            <div className="w-72 h-36 mt-3 border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>Si lo haces habitualmente y SI TENES un local,
                Registrate como Hub Remitente</p>
            </div>

            {/* Caja 2 */}
            <div className="w-72 h-36 mt-3  border border-2 border-[#3e047c] p-1 flex justify-center items-center">
              <p>O completa este simple formulario y te contactamos a la brevedad</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default PartSix