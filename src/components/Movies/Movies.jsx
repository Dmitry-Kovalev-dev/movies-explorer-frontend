import React, { useState } from "react";

import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from '../SearchForm/SearchForm';
import { textValue, LSItem } from "../../utils/constants";

const Movies = (props) => {
  const { movies, getAllMoviesBF, onSave, pathname, onDelete, onCheckBox, isChecked, onMore, hasMoreBtn, idSavedMovies } = props;

  const [input, setInput] = useState(localStorage.getItem(LSItem.input) || '');
  const [placeholder, setPlaceholder] = useState(textValue.placeholderNormal);

  const handleChange = (evt) => {
    setInput(evt.target.value);
  };

  const handleClickCheckBox = (evt) => {
    onCheckBox(evt);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (input === '') {
      setPlaceholder(textValue.placeholderInvald);
    } else {
      getAllMoviesBF();
      localStorage.setItem(LSItem.input, input);
    }
  };

  return (
    <main className="content">
      <section className="movies">
        <SearchForm
          onChange={handleChange}
          onCheckBox={handleClickCheckBox}
          isChecked={isChecked}
          onSubmit={handleSubmit}
          inputValue={input}
          placeholder={placeholder}
        />
        {
          movies.length > 0 ?
            <>
              <MovieCardList
                movies={movies}
                onSave={onSave}
                pathname={pathname}
                onDelete={onDelete}
                classNameBtn={'movie__button movie__button_type_disabled'}
                idSavedMovies={idSavedMovies}
              />
              {
                hasMoreBtn() ?
                  <button
                    className="movies__more"
                    type="button"
                    onClick={onMore}
                  >Ещё</button> :
                  null
              }
            </> :
            <p className="movies__caption">
              {
                localStorage.length > 2 ? "Ничего не найдено" : ""
              }
            </p>
        }
      </section>
    </main>
  );
};

export default Movies;
