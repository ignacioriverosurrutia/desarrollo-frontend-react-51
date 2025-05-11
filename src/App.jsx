// Importamos React y hooks necesarios
import React, { useState, useEffect, Suspense } from 'react';
// Importamos la función throttle de lodash para optimizar eventos de scroll
import { throttle } from 'lodash'; // Asegúrate de instalar lodash
// Importamos los estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importamos los componentes necesarios
import Navbar from './components/navbar'; // Importamos el componente de navegación
import HeroSection from './components/HeroSection'; // Importamos el componente de sección de héroe
import Services from './components/Services'; // Importamos el componente de servicios
import ContactForm from './components/ContactForm'; // Importamos el componente de formulario de contacto
import Footer from './components/Footer'; // Importamos el componente de contenido dinámico
import DynamicContent from './components/DynamicContent'; // Importamos el archivo de eventos
import Formulario from './components/Formulario'; // Importamos el componente Formulario
// Importamos los estilos personalizados
import './App.css'; // Archivo CSS para los estilos

// Definimos el componente principal de la aplicación
function App() {
  // Estado para detectar si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  // Hook useEffect para manejar el evento de scroll
  useEffect(() => {
    // Función para manejar el evento de scroll con throttle
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50); // Establece el estado cuando el scroll es mayor a 50px
    }, 200);

    // Añadimos el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Renderizamos el contenido de la aplicación
  return (
    // Contenedor principal con clases de Bootstrap
    <div className="container mt-5">
      {/* Barra de navegación */}
      <Navbar />

      {/* Título principal */}
      <h1 className="text-center mb-4">Eventos Interactivos</h1>

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

      {/* Aquí renderizamos el componente Formulario */}
      <h1 className="text-center mb-4">Formulario de Contacto</h1>
      <Formulario />
    </div>
  );
}

// Exportamos el componente principal
export default App;