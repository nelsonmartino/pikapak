import RoleCard from './RoleCard'
import { roleInfo } from '../utils/roleInfo'

const PartTwo = () => {
  return (
    <div className="text-center text-[#3e047c] py-3">

      <div>
        <div className="text-xl font-semibold">Unite a Pikapak</div>
        <div>de acuerdo con tu necesidad</div>
      </div>
      <div className="flex flex-row justify-center flex-wrap">
        {roleInfo.map((role, index) => (
          <div
            key={index}
            className="flex justify-center w-5/6 m-1 md:w-[30%] lg:mx-5 lg:w-auto"
          >
            <RoleCard info={role} />
          </div>
        ))}
      </div>
      <h2>Elegí tu rol en la cadena y ganá!</h2>
    </div>
  )
}

export default PartTwo
