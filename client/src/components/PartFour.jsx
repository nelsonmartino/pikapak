function PartFour() {
  return (
    <div
      className='flex flex-col items-center text-center text-[#3e047c] bg-[url("../src/assets/Background_partTwo.png")] bg-cover bg-center bg-no-repeat'
      id="quieroTransportar"
    >
      <div className="font-extrabold text-3xl w-fit p-3">
        Quiero ser transportista
      </div>
      <div className="font-semibold text-lg w-[34rem] my-2">
        Obtené una fuente de ingresos extra transportando paquetes mientras
        viajas por tus asuntos
      </div>
      <button className="bg-[#3e047c] border border-2 border-[#3e047c] text-white shadow-md hover:shadow-lg hover:bg-transparent hover:text-[#3e047c] w-80 mt-2">
        Descargá la App de Playstore y registrate como transportista
      </button>
      <div className="w-80 mb-2">Nosotros te calificamos y te habilitamos </div>
      <div className="flex w-full my-2 justify-evenly">
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          Cuando estes por moverte desde A hacia B, entras en la App y consultas
          si hay algún paquete para llevar que coincida con tu itineriario
        </div>
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          Si hay algo que te interese, aceptas el envío, lo buscas por A y lo
          llevás a B. Escaneas el paquete en A con la App y el Hub destino
          (depósito) lo escanea en B.
        </div>
        <div className="border border-2 border-[#3e047c] w-60 p-1">
          <div>
            <div className="font-semibold">Listo!</div>
            Ganaste plata mientras hacías tus movimientos. Sin horarios, sin
            presiones, de paso. ¡Un éxito!
          </div>
        </div>
      </div>
    </div>
  )
}

export default PartFour
