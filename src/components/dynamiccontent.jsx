import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Navigation from './components/Navbar';
import Navbar from './navbar';

function DynamicContent() {
  const [message, setMessage] = useState('Bienvenidos a la Municipalidad de Cholchol');

  // Evento al pasar el ratón sobre el texto
  const handleMouseEnter = () => {
    setMessage('¡Gracias por pasar el ratón sobre el texto!');
  };

  // Evento al enfocar el campo de entrada
  const handleFocus = () => {
    setMessage('Has enfocado el campo de entrada.');
  };

  return (
    <Container>
      <Navigation />
      <Navbar />
      <h2 className="text-center" onMouseEnter={handleMouseEnter}>
        {message}
      </h2>

      <input
        type="text"
        className="form-control"
        placeholder="Haz clic o enfócalo"
        onFocus={handleFocus}
      />
    </Container>
  );
}

export default DynamicContent;

// filepath: c:\Users\ignar\OneDrive\Escritorio\desarrollo-frontend-react-51\src\components\Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
}

export { Navbar };