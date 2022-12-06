import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {

  const path = useLocation().pathname;
  const setActiveLink = ({ isActive }) => isActive ? 'header__link header__link_active' : 'header__link';

  return (
    <header className="header" style={path !== '/' ? { backgroundColor: 'transparent' } : {}}>
      <div className="header__logo"></div>
      {
        path === '/' ? (<nav className="header__navigation">
          <NavLink to="/movies" className="header__signup">Регистрация</NavLink>
          <NavLink to="/movies" className="header__signin">Войти</NavLink>
        </nav>) : (<nav className="header__navigation">
          <NavLink to="/movies" className={setActiveLink}>Фильмы</NavLink>
          <NavLink to="/saved" className={setActiveLink}>Сохраненные фильмы</NavLink>
          <NavLink to="/" className={setActiveLink}>Аккаунт</NavLink>
        </nav>)
      }
    </header>
  );
};

export default Header;
