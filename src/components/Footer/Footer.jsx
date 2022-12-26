import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const path = useLocation().pathname;
  const footerStyle = (path === '/profile' || path === '/signin' || path === '/signup' || path === '/404') ? { display: 'none' } : {};
  return (
    <footer className="footer" style={footerStyle}>
      <p className="footer__caption">Учебный проект Яндекс.Практикум × BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__date">&copy; 2022</p>
        <nav className="footer__links">
          <a href="https://praktikum.yandex.ru" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
