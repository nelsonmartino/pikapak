import RoleCard from './RoleCard'
import { roleInfo } from '../utils/roleInfo'

const Unite = () => {
  return (
    <div className="text-center text-[#3e047c] py-20 bg-[#6B14CF]" id="unite">

      <div>
        <h1 className="text-4xl font-semibold">Unite a <span className='text-[#ffb200]'>Pikapak</span> </h1>
        <h3 className='text-3xl mt-8'>Elegí tu rol en la cadena y ganá!</h3>
        <h2 className='text-3xl'>de acuerdo con tu necesidad</h2>
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {roleInfo.map((role, index) => (
          <div
            key={index}
            className="flex justify-center w-full my-4 m-1 md:w-[30%] lg:mx-5 lg:w-auto"
          >
            <RoleCard info={role} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Unite;