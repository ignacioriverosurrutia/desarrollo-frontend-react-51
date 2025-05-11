import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash'; // Asegúrate de instalar lodash
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DynamicContent from './components/DynamicContent'; // Importa el nuevo componente
import './App.css'; // Archivo CSS para los estilos

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función para manejar el evento de scroll con throttle
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección principal */}
      <HeroSection />

      {/* Servicios */}
      <Services />

      {/* Contenido dinámico */}
      <DynamicContent />

      {/* Formulario de contacto */}
      <ContactForm />

      {/* Pie de página */}
      <Footer />

      {/* Indicador de desplazamiento */}
      <div className={`scroll-indicator ${scrolled ? 'scrolled' : ''}`}>
        Desplazamiento Detectado
      </div>
    </div>
  );
}

export default App;
