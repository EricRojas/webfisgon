import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add this import
import { useState } from 'react'
import fisgonLogo from './assets/FisgonLogo.svg'
import Navbar from './components/header/Navbar'
import './App.css'
import Home from './pages/1.home/Home'
import Caracteristicas from './pages/2.caracteristicas/Caracteristicas';
import Soluciones from './pages/3.soluciones/Soluciones'
import Contacto from './pages/4.contacto/Contacto';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div>
      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Catch-all route to redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}

export default App
