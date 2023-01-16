import React from "react";
import { NavLink } from 'react-router-dom';
import { navClasses } from "../../utils/constants";
import { pathValue } from "../../utils/constants";

const Navigation = (props) => {
  const { className, onCloseBurger, loggedIn } = props;

  const activeMainLink = ({ isActive }) => isActive ?
    `${navClasses.link} ${navClasses.active} ${navClasses.main}` :
    `${navClasses.link} ${navClasses.main}`;
  const activeProfileLink = ({ isActive }) => isActive ?
    `${navClasses.link} ${navClasses.active} ${navClasses.profile}` :
    `${navClasses.link} ${navClasses.profile}`;
  const activeLink = ({ isActive }) => isActive ?
    `${navClasses.link} ${navClasses.active}` :
    navClasses.link;

  const navigation =
    loggedIn ?
      <nav className={`navigation${className} navigation_login`}>
        <div className="navigation__cover navigation__cover_login">
          <button className="navigation__close" type="button" onClick={onCloseBurger}></button>
          <div className="navigation__links navigation__links_login">
            <NavLink to={pathValue.main} className={activeMainLink} onClick={onCloseBurger}>Главная</NavLink>
            <NavLink to={pathValue.movies} className={activeLink} onClick={onCloseBurger}>Фильмы</NavLink>
            <NavLink to={pathValue.saved} className={activeLink} onClick={onCloseBurger}>Сохраненные фильмы</NavLink>
          </div>
          <NavLink to={pathValue.profile} className={activeProfileLink} onClick={onCloseBurger}>Аккаунт</NavLink>
        </div>
      </nav>
      :
      <nav className="navigation">
        <div className="navigation__cover">
          <div className="navigation__links">
            <NavLink to={pathValue.signUp} className=" navigation__signup">Регистрация</NavLink>
            <NavLink to={pathValue.signIn} className="navigation__signin">Войти</NavLink>
          </div>
        </div>
      </nav>
    ;

  return navigation;
};

export default Navigation;
