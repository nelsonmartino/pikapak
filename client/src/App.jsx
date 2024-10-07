import '../src/output.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Carrussel from './components/Carrussel'
import GeneraIngresos from './components/GeneraIngresos'
import QuieroEnviar from './components/QuieroEnviar'
import Unite from './components/Unite'
import FormContact from './components/FormContact'
import Footer from './components/Footer'
// import { landingInfo } from './utils/landingInfo'

function App() {
  return (
    <div className="max-w-[100vw] min-h-screen">
      <NavBar />
      <Home />
      <Carrussel />
      <Unite />
      <GeneraIngresos />
      <QuieroEnviar />
      {/* {landingInfo.map((info, index) => (
        <PartFour key={index} info={info} />
      ))} */}

      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
      <FormContact />
      <Footer />
    </div>
  )
}

export default App;
