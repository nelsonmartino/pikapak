import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Registro from './components/Registro'
import Tutos from './components/Tutos'
import PassRecovery from './components/PassRecovery'
import PassUpdate from './components/PassUpdate'
import '../src/output.css'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/users" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/tutos" element={<Tutos />} />
          <Route path="/users/recovery" element={<PassRecovery />} />
          <Route path="/users/update" element={<PassUpdate />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
