import './index.css'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import Index from './pages/Index.jsx'
import Categoria from './pages/Categoria.jsx'
import SignUp from './pages/SignUp.jsx'
import LogIn from './pages/LogIn.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import LogLayout from './layouts/LogLayout.jsx'
import Producto from './pages/Producto.jsx'
import Carrito from './pages/Carrito.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path='/'
            element={<Index />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/contacto'
            element={<Contacto />}
          />
          <Route
            path='/categoria'
            element={<Categoria />}
          />
          <Route
            path='/producto/:id'
            element={<Producto />}
          />
          <Route
            path='/carrito'
            element={<Carrito />}
          />
        </Route>

        <Route element={<LogLayout />}>
          <Route
            path='/login'
            element={<LogIn />}
          />
          <Route
            path='/signup'
            element={<SignUp />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
