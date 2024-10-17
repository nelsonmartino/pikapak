
function QuieroEnviar() {
  return (

    <div
      className="relative flex flex-col items-center justify-center  py-[6rem] min-h-full text-[#3e047c] bg-[#6B14CF]"
      id="quieroEnviar"
    >
      {/* Título y subtítulo */}
      <h1 className="font-bold xl:text-4xl text-4xl text-[#3e047c] pb-3 ">
        Quiero <span className='text-[#ffb200]'> Enviar</span>
      </h1>
      <div className="font-semibold xl:text-xl text-2xl text-[#3e047c] mb-4">
        Envia paquetes a la velocidad de la luz
      </div>

      {/* Contenedor principal con imagen de fondo */}
      <div className="relative w-full h-[100vh] ">
        {/* Imagen centrada como fondo */}
        <div className="absolute inset-0 bg-[url('./assets/imgs/pikapak-aplicacion.png')] bg-cover bg-center xl:opacity-90 opacity-30 z-0 bg-no-repeat xl:bg-[length:40%] bg-[length:95%] left-10 flex justify-center"></div>


        {/* Contenedor cards*/}
        <div className="xl:relative w-full h-full flex flex-col xl:mb-16 items-center space-y-6 mb-[7rem]">

          <div className="xl:relative w-full flex justify-center flex-wrap mb-4">
            <span className="xl:absolute xl:top-[-15px] flex items-center  xl:left-[23%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">
              Paso 1
            </span>
            <div className="xl:absolute xl:top-0 xl:left-[15%] xl:w-72 xl:h-36 w-[90%]   h-full border border-2 border-[#3e047c] flex justify-center items-center  p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">

              <p className="text-center">Si lo hacés de vez en cuándo y NO TENES un local,  <a href="#acceso" className="text-[#ffb200]">Registrate </a> como Persona</p>
            </div>
          </div>

          {/* Segunda caja, en la parte superior derecha */}
          <div className="relative w-full flex justify-center ">
            <span className="absolute xl:top-[-15px]  xl:left-[70%] bg-white flex items-center  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 1
            </span>
            <div className="xl:absolute xl:top-0 xl:right-[17%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">


              <p className="text-center">Generas el envio en la app y armas el paquete.</p>
            </div>
          </div>



          {/* Tercera caja, en la parte izquierda media */}
          <div className=" w-full flex justify-center ">
            <span className="absolute xl:top-[32%] top-[20%] xl:left-[17%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 2
            </span>
            <div className="xl:absolute xl:top-[35%] xl:left-[8%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
              <p className="text-center">Lo llevás al Hub Remitente que más te convenga (hay muchos en la ciudad!)</p>
            </div>
          </div>



          {/* Cuarta caja, al centro */}
          <div className=" w-full flex justify-center ">
            <span className="absolute xl:top-[82%] top-[34%] xl:left-[48%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 4
            </span>
            <div className="xl:absolute xl:top-[95%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
              <p className="text-center">Si lo haces habitualmente y SI TENES un local, <a href="#acceso" className="text-[#ffb200]">Regístrate</a> como Hub Remitente</p>
            </div>
          </div>

          {/* Quinta caja, en la parte derecha media */}
          <div className=" w-full flex justify-center ">
            <span className="absolute xl:top-[32%] top-[47%] xl:left-[77%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 2
            </span>
            <div className="xl:absolute xl:top-[35%] xl:right-[10%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
              <p className="text-center">Listo! Tu paquete viaja rapidísimo a su destino</p>
            </div>
          </div>

          {/* Sexta caja, en la parte inferior izquierda */}
          <div className=" w-full flex justify-center ">
            <span className="absolute xl:top-[74%] top-[56%] xl:left-[24%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 3
            </span>
            <div className="xl:absolute xl:bottom-[1%] xl:left-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
              <p className="text-center">Cuándo el paquete llega, les informamos, a vos y al destinatario.</p>
            </div>
          </div>

          {/* Séptima caja, en la parte inferior derecha */}
          <div className=" w-full flex justify-center ">
            <span className="absolute xl:top-[71%] top-[69%] xl:left-[73%] bg-white  xl:p-1 xl:text-sm font-bold text-[#3e047c] rounded shadow-lg z-30">

              Paso 3
            </span>
            <div className="xl:absolute xl:bottom-[1%] xl:right-[15%] xl:w-72 xl:h-36 w-[90%] h-full border border-2 border-[#3e047c] p-1 flex justify-center items-center p-4 mb-6 bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#3e047c] bg-opacity-50 z-10">
              <p className="text-center">O completa este simple <a href="#contact" className="text-[#ffb200]">formulario</a> y te contactamos a la brevedad.</p>
            </div>
          </div>
        </div>

        {/* Sección con imagen de fondo fija */}
        {/* <div className='relative   bg-[url("./assets/imgs/pikapak-viajas.png")] xl:bg-cover bg-center bg-no-repeat bg-fixed xl:bg-fixed xl:bg-[length:99.99%_99.8%] bg-[length:100%] xl:h-[25rem] xl:my-[4rem]' >

          <div className='h-[25rem]'>
          </div>
        </div> */}
        {/* <div className='absolute inset-0 bg-black opacity-30'></div> Filtro oscuro opcional */}
      </div>
    </div>


  );
}
export default QuieroEnviar;

