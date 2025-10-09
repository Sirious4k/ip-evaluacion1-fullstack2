import './index.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Index from './pages/Index.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}

export default App;
