import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';


const Header = (props) => {
  const { loggedIn } = props;
  const path = useLocation().pathname;
  const [classNameBurger, setClassNameBurger] = useState('');

  const handleClickBurgerBtn = () => {
    setClassNameBurger(' navigation_open');
  };

  const handleClickCloseBurger = () => {
    setClassNameBurger('');
  };



  const burgerBtn =
    loggedIn ?
      <button className="header__burger-btn" type="button" onClick={handleClickBurgerBtn}></button> :
      <></>;

  const headerStyle =
    path === '/' ?
      {} :
      (path === '/signup' || path === '/signin' || path === '/404') ?
        { display: 'none' } :
        { backgroundColor: 'transparent' };

  return (
    <header className="header" style={headerStyle}>
      <Logo
        classAuth=''
      />
      <Navigation
        className={classNameBurger}
        onCloseBurger={handleClickCloseBurger}
        loggedIn={loggedIn}
      />
      {burgerBtn}
    </header>
  );
};

export default Header;
