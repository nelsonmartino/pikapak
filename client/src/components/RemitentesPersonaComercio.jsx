import remitentePersona from '../assets/imgs/pikapak-persona.png'
import remitenteComercio from '../assets/imgs/pikapak-comercio.png'

function RemitentesPersonaComercio() {
    return (
        <div className="flex flex-col h-full content-center">


            <div className=" h-full flex items-center mt-[0.5rem] bg-[#017df6] bg-opacity-70  drop-shadow-lg bg-no-repeat shadow-lg" >
                <img src={remitentePersona} className='w-full' alt="Imagen respresentativa de la entrega de un paquete como persona" />
            </div>
            <div className='h-[2rem] bg-white'>

            </div>
            <div className="h-full flex  bg-[#017df6] bg-opacity-70 drop-shadow-lg bg-no-repeat shadow-lg bg-opacity-30">
                <img src={remitenteComercio} className='w-full' alt="Imagen respresentativa de la entrega de un paquete como comercio" />
            </div>
            <div className='h-[4rem] bg-white'>

            </div>
        </div>

    )
}

export default RemitentesPersonaComercio;