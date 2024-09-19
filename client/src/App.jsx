import '../src/output.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import PartTwo from './components/PartTwo'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <PartTwo />
      {/* <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
    </div>
  )
}

export default App
