import React, { useState, useEffect, Suspense } from 'react';
import { throttle } from 'lodash'; // Asegúrate de instalar lodash
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
const DynamicContent = React.lazy(() => import('./components/DynamicContent')); // Lazy load DynamicContent
import './App.css'; // Archivo CSS para los estilos

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función para manejar el evento de scroll con throttle
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50); // Establece el estado cuando el scroll es mayor a 50px
    }, 200);

    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección principal */}
      <HeroSection />

      {/* Servicios */}
      <Services />

      {/* Contenido dinámico (Lazy loaded) */}
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicContent />
      </Suspense>

      {/* Formulario de contacto */}
      <ContactForm />

      {/* Pie de página */}
      <Footer />

      {/* Indicador de desplazamiento */}
      <div 
        className={`scroll-indicator ${scrolled ? 'scrolled' : ''}`} 
        role="alert" 
        aria-live="assertive" // Para accesibilidad, anuncia el cambio en el lector de pantalla
      >
        {scrolled ? 'Desplazamiento Detectado' : ''}
      </div>
    </div>
  );
}

export default App;