import React from "react";
import "./footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/privacidad">Política de Privacidad</a></li>
          <li><a href="/terminos">Términos y Condiciones</a></li>
          <li><a href="/contacto">Contáctanos</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer