import './index.css'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Index from './pages/Index.jsx'
import Computadoras from './pages/Computadores.jsx'
import Consolas from './pages/Consolas.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import LogLayout from './layouts/LogLayout.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/computadoras" element={<Computadoras />} />
          <Route path="/consolas" element={<Consolas />} />

        </Route>

        <Route element={<LogLayout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App;
