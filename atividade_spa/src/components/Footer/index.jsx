import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-title">Feito por Geovane Ferreira - com ❤️ por nossa família</p>
      <p className="footer-copy">&copy; {new Date().getFullYear()} — Todos os direitos reservados.</p>
    </footer>
  );
}