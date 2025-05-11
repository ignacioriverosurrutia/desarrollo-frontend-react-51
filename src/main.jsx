import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importación de Bootstrap
import { Card } from 'react-bootstrap'; // Importación de componentes de Bootstrap

// Función que maneja el evento onFocus
function handleFocus() {
  console.log('Input enfocado');
}

function App() {
  return (
    <div className="container mt-5">
      {/* Campo de entrada con evento onFocus */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Haz clic o enfócalo"
        onFocus={handleFocus}
      />

      {/* Componente Card de Bootstrap */}
      <Card>
        <Card.Img variant="top" src="/src/assets/images/servicio1.jpg" alt="Servicio 1" />
        <Card.Body>
          <Card.Title>Servicio 1</Card.Title>
          <Card.Text>
            Descripción breve del servicio 1. Este es un ejemplo de cómo usar Bootstrap con React.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

// Crear el root para renderizar la aplicación
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("El contenedor 'root' no se encuentra en el HTML.");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}