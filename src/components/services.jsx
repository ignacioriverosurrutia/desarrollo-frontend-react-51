import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 font-weight-bold" style={{ color: '#333' }}>Servicios Municipales</h2>
        <Row>
          <Col xs={12} md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/assets/images/servicio1.jpg" />
              <Card.Body>
                <Card.Title className="font-weight-bold">Atención al Público</Card.Title>
                <Card.Text>
                  Brindamos atención personalizada a los vecinos de Cholchol.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/assets/images/servicio2.jpg" />
              <Card.Body>
                <Card.Title className="font-weight-bold">Pago de Impuestos</Card.Title>
                <Card.Text>
                  Realiza tus pagos de manera rápida y segura desde nuestro sitio web.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/assets/images/servicio3.jpg" />
              <Card.Body>
                <Card.Title className="font-weight-bold">Proyectos Comunitarios</Card.Title>
                <Card.Text>
                  Conoce los proyectos que estamos desarrollando para mejorar la calidad de vida.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;