import React from 'react';
import './style.css';

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">Nossa Família ❤️</div>
        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#mae">Mãe</a>
          <a href="#eu">Eu</a>
          <a href="#pet">O Pet</a>
          <a href="#galeria">Memórias</a>
          <a href="#homenagens">Homenagens</a>
        </nav>
      </div>
    </header>
  );
}