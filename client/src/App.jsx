import '../src/output.css'
import Carrussel from './components/Carrussel'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PartFour from './components/PartFour'
import PartThree from './components/PartThree'
import PartTwo from './components/PartTwo'
import PartSix from './components/PartSix'
import { landingInfo } from './utils/landingInfo'
import FormContact from './components/FormContact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="max-w-[100vw] min-h-screen">
      <NavBar />
      <Home />
      <Carrussel />
      <PartTwo />
      <PartThree />
      {landingInfo.map((info, index) => (
        <PartFour key={index} info={info} />
      ))}
      <PartSix />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
      <FormContact />
      <Footer />
    </div>
  )
}

export default App
