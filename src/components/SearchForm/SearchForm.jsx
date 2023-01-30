import React from 'react';

const SearchForm = (props) => {
  const { onChange, onCheckBox, isChecked, onSubmit, inputValue, placeholder } = props;
  return (
    <section className="search">
      <form action="/" className="form" onSubmit={onSubmit} required>
        <fieldset className="form__fieldset">
          <input
            id="input"
            type="text"
            name="search"
            placeholder={placeholder}
            className="form__input"
            onChange={onChange}
            value={inputValue}
          />
        </fieldset>
        <button className="form__submit" type="submit">Найти</button>
      </form>
      <div className="search__filter">
        <input type="checkbox" className='search__checkbox' onClick={onCheckBox} defaultChecked={isChecked} />
        <p className="search__shorts-caption">Короткометражки</p>
      </div>
      <div className="search__line"></div>
    </section>
  );
};

export default SearchForm;