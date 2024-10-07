function QuieroEnviar() {
  return (
    <div
      className="relative flex flex-col items-center justify-center  py-[3rem] mb-[7rem] pb-[6rem] min-h-screen text-[#3e047c] "
      id="quieroEnviar"
    >
      {/* Título y subtítulo */}
      <h1 className="font-extrabold text-3xl text-[#3e047c] pb-3 pt-5">
        Quiero Enviar
      </h1>
      <div className="font-semibold text-lg text-[#3e047c] mb-4">
        Envia paquetes a la velocidad de la luz
      </div>

      {/* Contenedor principal con imagen de fondo */}
      <div className="relative w-full h-[80vh] ">
        {/* Imagen centrada como fondo */}
        <div className="absolute inset-0 bg-[url('./assets/imgs/pikapak-todos.png')] bg-cover bg-center opacity-50 z-0 bg-no-repeat xl:bg-[length:40%] bg-[length:95%] left-10 flex justify-center"></div>


        {/* Contenedor cards*/}
        <div className="xl:relative w-full h-full flex flex-col gap-4 items-center ">

          <div className="xl:absolute xl:top-0 xl:left-[15%] xl:w-72 xl:h-36 w-[90%]   h-full border border-2 border-[#3e047c] flex justify-center items-center  p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Si lo hacés de vez en cuándo y NO TENES un local,  <a href="#acceso" className="text-[#ffb200]">Registrate </a> como Persona</p>
          </div>

          {/* Segunda caja, en la parte superior derecha */}
          <div className="xl:absolute xl:top-0 xl:right-[17%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Generas el envio en la app y armas el paquete.</p>
          </div>

          {/* Tercera caja, en la parte izquierda media */}
          <div className="xl:absolute xl:top-[35%] xl:left-[8%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Lo llevás al Hub Remitente que más te convenga (hay muchos en la ciudad!)</p>
          </div>

          {/* Cuarta caja, al centro */}
          <div className="xl:absolute xl:top-[95%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Si lo haces habitualmente y SI TENES un local, <a href="#acceso" className="text-[#ffb200]">Regístrate</a> como Hub Remitente</p>
          </div>

          {/* Quinta caja, en la parte derecha media */}
          <div className="xl:absolute xl:top-[35%] xl:right-[10%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Listo! Tu paquete viaja rapidísimo a su destino</p>
          </div>

          {/* Sexta caja, en la parte inferior izquierda */}
          <div className="xl:absolute xl:bottom-[1%] xl:left-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">Cuándo el paquete llega, les informamos, a vos y al destinatario.</p>
          </div>

          {/* Séptima caja, en la parte inferior derecha */}
          <div className="xl:absolute xl:bottom-[1%] xl:right-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
            <p className="text-center">O completa este simple <a href="#contact" className="text-[#ffb200]">formulario</a> y te contactamos a la brevedad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuieroEnviar;