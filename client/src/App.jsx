import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Landing from './components/Landing'
import Login from './components/Login';
import Registro from './components/Registro';
import Tutos from './components/Tutos';
import PassRecovery from './components/PassRecovery';
import PassUpdate from './components/PassUpdate';
import '../src/output.css';




function App() {

  return (
    <>
      <Router>

        <Routes>
          {/* Ruta para el login/registro */}
          <Route path="/users" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          <Route path="/tutos" element={<Tutos />} />
          <Route path="/users/recovery" element={<PassRecovery />} />
          <Route path="/recovery" element={<PassUpdate />} />
          {/* Ruta protegida para la página de inicio */}
          {/* <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}
          /> */}

          {/* Ruta por defecto redirige al login */}
          {/* <Route path="*" element={<Navigate to="/auth" />} /> */}

        </Routes>

        {/* <div className="max-w-[100vw] min-h-screen"> */}
        {/* {landingInfo.map((info, index) => (
        <QuieroEnviar key={index} info={info} />
      ))}
      <img src="../src/assets/logo.png" alt="logo_Pikapak" /> */}
        {/* </div> */}
      </Router>
    </>
  )
}

export default App;
