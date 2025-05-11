import React from 'react';
import { Container, Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="inicio" className="hero-section text-center text-white py-5" style={{ backgroundColor: '#007bff' }}>
      <Container>
        <h1 className="display-4 font-weight-bold">Bienvenidos a la Municipalidad de Cholchol</h1>
        <p className="lead mb-4">Estamos comprometidos con el bienestar de nuestra comunidad.</p>
        <Button href="#contacto" variant="light" size="lg">
          Contáctanos
        </Button>
      </Container>
    </section>
  );
}

export default HeroSection;