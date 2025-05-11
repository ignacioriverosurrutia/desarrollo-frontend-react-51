import React from 'react';
import './footer.css'; // Importa los estilos personalizados

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Información general */}
        <p>&copy; {new Date().getFullYear()} Municipalidad de Cholchol. Todos los derechos reservados.</p>
        <hr />
        {/* Enlaces a redes sociales */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;