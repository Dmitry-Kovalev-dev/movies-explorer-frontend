import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import NotFound from '../NotFound/NotFound';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';
import Preloader from '../Preloader/Preloader';
import Popup from '../Popup/Popup';

import { checkToken, editProfile, login, register, signOut } from '../../utils/api/mainApi';
import { deleteMovie, getMovies, getSavedMovie, saveMovie } from '../../utils/api/MoviesApi';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { filter, getCountOfRenderItems } from '../../utils/utils';
import { textValue, pathValue, LSItem } from '../../utils/constants';

const App = () => {
  const [signupBtnValue, setSignupBtnValue] = useState(textValue.signUpBtnValue);
  const [signinBtnValue, setSigninBtnValue] = useState(textValue.signInBtnValue);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;

  const openPopup = (message) => {
    setIsOpenPopup(true);
    setPopupMsg(message);
    setTimeout(() => {
      setIsOpenPopup(false)
    }, 2000);
  };

  const handleSubmitLogin = (email, password) => {
    setSigninBtnValue(textValue.singInBtnProcess);
    login(email, password)
      .then((user) => {
        setCurrentUser(user);
        navigate(pathValue.movies);
        setLoggedIn(true);
        openPopup(textValue.popupSignInSuccess);
      })
      .catch((err) => {
        err.then((res) => {
          openPopup(res.message);
        });
      })
      .finally(() => {
        setSigninBtnValue(textValue.signInBtnValue);
      })
  };

  const handleSubmitRegister = (email, name, password) => {
    setSignupBtnValue(textValue.singUpBtnProcess);
    register(email, name, password)
      .then(() => {
        handleSubmitLogin(email, password);
      })
      .catch((err) => {
        err.then((res) => {
          openPopup(res.message);
        })
      })
      .finally(() => {
        setSignupBtnValue(textValue.signUpBtnValue);
      })
  };

  const handleSubmitLogout = () => {
    signOut()
      .then(() => {
        navigate(pathValue.main);
        clearAll();
        openPopup(textValue.popupSignOutSucces)
      })
      .catch((err) => {
        err.then((res) => {
          openPopup(res.message);
        })
      })
  };

  const handeSubmitEditProfile = (email, name) => {
    setIsLoad(true);
    editProfile(email, name)
      .then((user) => {
        setCurrentUser(user);
        openPopup(textValue.popupEditProfileSuccess)
      })
      .catch((err) => {
        err.then((res) => {
          openPopup(res.message)
        });
      })
      .finally(() => {
        setIsLoad(false);
      })
  };

  const clearAll = () => {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    setMoviesToRender([])
    setIsChecked(false);
  };

  const tokenCheck = () => {
    setIsLoad(true);
    checkToken()
      .then((user) => {
        setLoggedIn(true);
        setCurrentUser(user);
        navigate(location.pathname);
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUser({});
        navigate(pathValue.main);
      })
      .finally(() => {
        setIsLoad(false);
      })
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  /** Работа с фильмами */

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(JSON.parse(localStorage.getItem(LSItem.filteredMovies)) || []);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.getItem(LSItem.checkbox)) || false);
  const [idSavedMovies, setIdSavedMovies] = useState([]);

  const sliceParam = getCountOfRenderItems(); // получаем параметры отображения фильмов
  const savedMovieFromLS = JSON.parse(localStorage.getItem(LSItem.savedMovies));

  //** Работа с фильмами BeatFilm */

  const handleGetMoviesBitFilms = () => {
    setIsLoad(true)
    getMovies()
      .then((res) => {
        localStorage.setItem(LSItem.allMovies, JSON.stringify(res));
        renderMovies();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoad(false);
      })
  };

  const filterMovie = (movieBase, inputValue, checked) => { // функция фильтрации всех фильмов
    const isShort = checked;
    const searchValue = inputValue
    const allFilms = movieBase
    const moviesAfterFilter = allFilms.filter(movie => filter(movie, searchValue, isShort));
    return moviesAfterFilter;
  };

  const sliceMovies = () => { // Функция получения первых отфильтрованых фильмов для отображения
    const movieBase = JSON.parse(localStorage.getItem(LSItem.allMovies));
    const inputValue = localStorage.getItem(LSItem.input);
    const checked = JSON.parse(localStorage.getItem(LSItem.checkbox));
    const moviesAfterFilter = filterMovie(movieBase, inputValue, checked);
    localStorage.setItem(LSItem.filteredMovies, JSON.stringify(moviesAfterFilter));
    setFilteredMovies(moviesAfterFilter)
    const moviesAfterSlice = moviesAfterFilter.slice(0, sliceParam.count);
    return moviesAfterSlice;
  };

  const renderMovies = () => {
    setMoviesToRender(sliceMovies());
  };

  const renderMoreBtn = () => {
    const renderLength = moviesToRender.length;
    const filterLenght = filteredMovies.length;
    if (
      renderLength !== 0 &&
      filterLenght > sliceParam.count &&
      renderLength !== filterLenght
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleClickMoreBtn = () => {
    const startIndexAddedMovies = moviesToRender.length;
    const endIndexAddedMovies = startIndexAddedMovies + sliceParam.add
    setMoviesToRender([...moviesToRender, ...filteredMovies.slice(startIndexAddedMovies, endIndexAddedMovies)])
  };

  const handleClickShortToggle = (evt) => {
    setIsChecked(evt.target.checked)
    localStorage.setItem(LSItem.checkbox, isChecked)
  };

  useEffect(() => {
    localStorage.setItem(LSItem.checkbox, isChecked);
  })

  useEffect(() => {
    if (JSON.parse(localStorage.getItem(LSItem.filteredMovies))) {
      renderMovies();
    }
  }, [isChecked]);

  //** Работа с соханенными фильмами */

  const handleGetSavedMovies = () => {
    getSavedMovie()
      .then((res) => {
        setSavedMovies(res);
        localStorage.setItem(LSItem.savedMovies, JSON.stringify(res));
        setIdSavedMovies(res.map(movie => { return movie.movieId }))
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleClickSaveMovie = (movie) => {
    saveMovie(movie)
      .then((res) => {
        openPopup(res.message);
        handleGetSavedMovies();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(matchedId(id))
      .then((res) => {
        openPopup(res.message)
        handleGetSavedMovies()
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const matchedId = (id) => { // Функция сопоставления id фильма BeatFilm с id сохраненного фильма
    if (path === pathValue.movies) {
      const arr = savedMovieFromLS.map(movie => {
        return [movie.movieId, movie._id]
      });
      const _id = arr.filter(arr => arr[0] === id).flat()[1];
      return _id;
    } else {
      return id;
    }
  };

  const searchSavedMovies = (inputValue, checkbox) => {
    setSavedMovies(filterMovie(savedMovieFromLS, inputValue, checkbox));
  };

  const showAllSavedMovies = () => {
    setSavedMovies(savedMovieFromLS);
  };

  useEffect(() => {
    if (loggedIn) {
      handleGetSavedMovies();
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isLoad ? <Preloader /> : (
        <>
          <Popup
            isOpen={isOpenPopup}
            message={popupMsg}
          />
          <Header
            loggedIn={loggedIn}
            pathname={path}
          />
          <Routes>

            <Route
              path={pathValue.main}
              element={
                <Main />
              }
            />

            <Route
              path={pathValue.signIn}
              element={
                <Signin
                  btnValue={signinBtnValue}
                  greeting={textValue.greetSignIn}
                  onLogin={handleSubmitLogin}
                  pathname={path}
                />
              }
            />

            <Route
              path={pathValue.signUp}
              element={
                <Signup
                  btnValue={signupBtnValue}
                  greeting={textValue.greetSignUp}
                  onRegister={handleSubmitRegister}
                  pathname={path}
                />
              }
            />

            <Route
              path='*'
              element={
                <NotFound />
              }
            />

            <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
              <Route
                path={pathValue.movies}
                element={
                  <Movies
                    movies={moviesToRender}
                    getAllMoviesBF={handleGetMoviesBitFilms}
                    onSave={handleClickSaveMovie}
                    pathname={path}
                    onCheckBox={handleClickShortToggle}
                    isChecked={isChecked}
                    onMore={handleClickMoreBtn}
                    hasMoreBtn={renderMoreBtn}
                    onDelete={handleDeleteMovie}
                    idSavedMovies={idSavedMovies}
                  />
                }
              />

              <Route
                path={pathValue.saved}
                element={
                  <SavedMovies
                    onSubmit={searchSavedMovies}
                    onCheckBox={handleClickShortToggle}
                    movies={savedMovies}
                    showAll={showAllSavedMovies}
                    onDelete={handleDeleteMovie}
                  />
                }
              />

              <Route
                path={pathValue.profile}
                element={
                  <Profile
                    greeting={`${textValue.greetProfile}${currentUser.name}`}
                    onLogout={handleSubmitLogout}
                    onEdit={handeSubmitEditProfile}
                  />
                }
              />
            </Route>

          </Routes>
          <Footer
            pathname={path}
          />
        </>
      )
      }
    </CurrentUserContext.Provider >
  );
};

export default App;
