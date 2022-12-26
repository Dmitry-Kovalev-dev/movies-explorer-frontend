import React from 'react';

const SearchForm = () => {
  return (
    <section className="search">
      <form action="/" className="form">
        <fieldset className="form__fieldset">
          <input
            id="input"
            type="text"
            placeholder="Фильм"
            className="form__input"
            required
          />
        </fieldset>
        <button className="form__submit" type="submit">Найти</button>
      </form>
      <div className="search__filter">
        <div className="search__shorts">
          <div className="search__shorts-loggle"></div>
        </div>
        <p className="search__shorts-caption">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
};

export default SearchForm;