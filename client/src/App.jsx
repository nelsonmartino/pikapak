import '../src/output.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Carrussel from './components/Carrussel'
import GeneraIngresos from './components/GeneraIngresos'
import PartFour from './components/PartFour'
import PartTwo from './components/PartTwo'
import PartSix from './components/PartSix'
import FormContact from './components/FormContact'
import Footer from './components/Footer'
// import { landingInfo } from './utils/landingInfo'

function App() {
  return (
    <div className="max-w-[100vw] min-h-screen">
      <NavBar />
      <Home />
      <Carrussel />
      <PartTwo />
      <GeneraIngresos />
      <PartFour />
      {/* {landingInfo.map((info, index) => (
        <PartFour key={index} info={info} />
      ))} */}
      <PartSix />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
      <FormContact />
      <Footer />
    </div>
  )
}

export default App
