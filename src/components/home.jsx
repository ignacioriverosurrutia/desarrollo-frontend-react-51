import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Home() {
  return (
    <div className="home">
      <section className="hero-section text-center text-white">
        <Container>
          <h1 className="display-4">Bienvenidos a la Municipalidad de Cholchol</h1>
          <p className="lead mb-4">Trabajamos para mejorar la calidad de vida de nuestra comunidad.</p>
          <Button href="#servicios" variant="light" size="lg">Explora nuestros servicios</Button>
        </Container>
      </section>

      <section id="servicios" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 font-weight-bold">Nuestros Servicios</h2>
          <Row>
            <Col xs={12} md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="/assets/images/servicio1.jpg" />
                <Card.Body>
                  <Card.Title>Atención al Público</Card.Title>
                  <Card.Text>
                    Brindamos atención personalizada a los vecinos de Cholchol.
                  </Card.Text>
                  <Button variant="primary" href="#contacto">Solicitar información</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="/assets/images/servicio2.jpg" />
                <Card.Body>
                  <Card.Title>Pago de Impuestos</Card.Title>
                  <Card.Text>
                    Realiza tus pagos de manera rápida y segura desde nuestro sitio web.
                  </Card.Text>
                  <Button variant="primary" href="#contacto">Más información</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card className="shadow-sm">
                <Card.Img variant="top" src="/assets/images/servicio3.jpg" />
                <Card.Body>
                  <Card.Title>Proyectos Comunitarios</Card.Title>
                  <Card.Text>
                    Conoce los proyectos que estamos desarrollando para mejorar la calidad de vida.
                  </Card.Text>
                  <Button variant="primary" href="#contacto">Participa</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;