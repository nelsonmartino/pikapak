import '../src/output.css'
import Carrussel from './components/Carrussel'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PartThree from './components/PartThree'
import PartTwo from './components/PartTwo'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Carrussel />
      <PartTwo />
      <PartThree />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
    </div>
  )
}

export default App
