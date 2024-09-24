import '../src/output.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PartFour from './components/PartFour'
import PartThree from './components/PartThree'
import PartTwo from './components/PartTwo'
import PartSix from './components/PartSix'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <PartTwo />
      <PartThree />
      <PartFour />
      <PartSix />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
    </div>
  )
}

export default App
