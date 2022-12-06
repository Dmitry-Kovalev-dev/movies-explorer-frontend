import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
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
