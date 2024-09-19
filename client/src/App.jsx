import '../src/output.css'
import NavBar from './components/NavBar'
import PartThree from './components/PartThree'
import PartTwo from './components/PartTwo'

function App() {
  return (
    <div className="app">
      <NavBar />
      <PartTwo />
      <PartThree />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
    </div>
  )
}

export default App
