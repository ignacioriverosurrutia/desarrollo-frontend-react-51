import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" bg="light" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#inicio">
          <img src="/assets/images/logo.png" alt="Municipalidad de Cholchol" width="120" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio" aria-label="Ir a la sección de inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios" aria-label="Ir a la sección de servicios">Servicios</Nav.Link>
            <Nav.Link href="#proyectos" aria-label="Ir a la sección de proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#contacto" aria-label="Ir a la sección de contacto">Contacto</Nav.Link>
          </Nav>
          <Button variant="primary" href="#contacto" className="ms-2">Contáctanos</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;