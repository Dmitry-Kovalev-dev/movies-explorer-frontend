import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import { pathValue } from '../../utils/constants';


const Header = (props) => {
  const { loggedIn, pathname } = props;

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
    pathname === pathValue.main ?
      {} :
      (pathname === pathValue.signUp || pathname === pathValue.signIn || pathname === pathValue.notFound) ?
        { display: 'none' } :
        { backgroundColor: 'transparent' };

  return (
    <header className="header" style={headerStyle}>
      <Logo
        classAuth={''}
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
