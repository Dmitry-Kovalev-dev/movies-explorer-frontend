
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutProject from "../AboutProject/AboutProject";
import Movies from '../Movies/Movies';
import Promo from "../Promo/Promo"
import SearchForm from '../SearchForm/SearchForm';
import Student from "../Student/Student";
import Techs from "../Techs/Techs";
import { allMovies, savedMovies } from '../../utils/constants';

const Main = () => {
  return (
    <main className="content">
      <Routes>
        <Route path='/' element={
          <>
            <Promo />
            <AboutProject />
            <Techs />
            <Student />
          </>}
        />

        <Route path='/movies' element={
          <>
            <SearchForm />
            <Movies
              movies={allMovies}
            />
          </>}
        />

        <Route path='/saved' element={
          <>
            <SearchForm />
            <Movies 
              movies={savedMovies}
            />
          </>}
        />
      </Routes>
    </main>
  );
};

export default Main;