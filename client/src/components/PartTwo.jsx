import RoleCard from './RoleCard'
import { roleInfo } from '../utils/roleInfo'

const PartTwo = () => {
  return (
    <div className="text-center">
      <div className="flex flex-row ">
        <div className="flex flex-col w-1/2 ">
          <div className="text-xl">Pikapak</div>
          <div>Logística colaborativa all-in-one</div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="text-xl">Pikapak</div>
          <div>Logística colaborativa all-inclusive</div>
        </div>
      </div>
      <div>
        <div className="text-xl">Unite a Pikapak</div>
        <div>Sumate a nosotros de acuerdo con tu necesidad</div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-2/5 items-center">
          <RoleCard info={roleInfo[0]} />
          <RoleCard info={roleInfo[1]} />
        </div>
        <div className="flex flex-col w-1/5 justify-center">
          <div className="text-xl">Unite a Pikapak</div>
          <div>Elegí tu rol en la cadena y ganá!</div>
        </div>
        <div className="flex flex-col w-2/5 items-center">
          <RoleCard info={roleInfo[2]} />
          <RoleCard info={roleInfo[3]} />
        </div>
      </div>
    </div>
  )
}

export default PartTwo
