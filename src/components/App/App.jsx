import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile"
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { allMovies, savedMovies } from "../../utils/constants"
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [signupBtnValue, setSignupBtnValue] = useState('Зарегистрироваться');
  const [signinBtnValue, setSigninBtnValue] = useState('Войти');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmitLogin = () => {
    setSigninBtnValue('Входим...');
    setTimeout(() => {
      navigate('/movies');
      setSigninBtnValue('Войти');
      setLoggedIn(true);
    }, 500);
    
  };

  const handleSubmitRegister = () => {
    setSignupBtnValue('Регистрируем...')
    setTimeout(() => {
      navigate('/movies');
      setSignupBtnValue('Зарегистрироваться');
      setLoggedIn(true);
    }, 500);
  };

  const handleSubmitLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <CurrentUserContext.Provider value={'hello'}>
      <Header
        loggedIn={loggedIn}
      />
      <Routes>

        <Route
          path='/'
          element={
            <Main />
          }
        />

        <Route
          path='/movies'
          element={
            <Movies
              movies={allMovies} />
          }
        />

        <Route
          path='/saved'
          element={
            <Movies
              movies={savedMovies} />
          }
        />

        <Route
          path='/profile'
          element={
            <Profile
              greeting={'Привет, Дмитрий!'}
              onLogout={handleSubmitLogout}
            />
          }
        />

        <Route
          path='/signin'
          element={
            <Signin
              btnValue={signinBtnValue}
              greeting={'Рады видеть!'}
              onLogin={handleSubmitLogin}
            />
          }
        />

        <Route
          path='/signup'
          element={
            <Signup
              btnValue={signupBtnValue}
              greeting={'Добро пожаловать!'}
              onRegister={handleSubmitRegister}
            />
          }
        />

        <Route
          path='/404'
          element={
            <NotFound />
          }
        />

      </Routes>
      <Footer />

    </CurrentUserContext.Provider >
  );
};

export default App;