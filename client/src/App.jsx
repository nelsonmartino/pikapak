import '../src/output.css'
import Carrussel from './components/Carrussel'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PartFour from './components/PartFour'
import PartThree from './components/PartThree'
import PartTwo from './components/PartTwo'
import { landingInfo } from './utils/landingInfo'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Carrussel />
      <PartTwo />
      <PartThree />
      {landingInfo.map((info, index) => (
        <PartFour key={index} info={info} />
      ))}
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
    </div>
  )
}

export default App
