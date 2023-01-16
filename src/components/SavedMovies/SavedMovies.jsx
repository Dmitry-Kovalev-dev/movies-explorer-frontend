import React, { useEffect, useState } from "react";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from '../SearchForm/SearchForm';
import { textValue, LSItem } from "../../utils/constants";


const SavedMovies = (props) => {
  const { movies, onSubmit, onDelete, showAll } = props;

  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState(textValue.placeholderNormal);
  const [checked, setChecked] = useState(false);

  const handleChange = (evt) => {
    setInput(evt.target.value);
  };

  const handleClickCheckBox = (evt) => {
    setChecked(evt.target.checked);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (input === '') {
      setPlaceholder(textValue.placeholderInvald);
    } else {
      onSubmit(input, checked);
    }
  };

  const showAllIfEmpty = () => {
    setInput('');
    showAll();
  };

  useEffect(() => {
    if (localStorage.getItem(LSItem.savedMovies)) {
      onSubmit(input || '', checked);
    }
  }, [checked]);

  return (
    <main className="content">
      <section className="movies">
        <SearchForm
          onChange={handleChange}
          onCheckBox={handleClickCheckBox}
          onSubmit={handleSubmit}
          inputValue={input}
          placeholder={placeholder}
        />
        {
          movies.length > 0 ?
            <MovieCardList
              movies={movies}
              onDelete={onDelete}
              classNameBtn={'movie__button movie__button_type_delete'}
            /> :
            JSON.parse(localStorage.getItem('savedMovie')).length === 0 ?
              <p className="movies__caption">Сохраните первый фильм</p> :
              <>
                <p className="movies__caption">Ничего не найдено</p>
                <button className="movies__show-all" onClick={showAllIfEmpty}>Сохраненные фильмы</button>
              </>
        }
      </section>
    </main>
  )
};

export default SavedMovies;