import React from 'react';
import { useLocation } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;

  const path = useLocation().pathname;

  const movieBtnClass = path === '/movies' ?
    'movie__button movie__button_type_active' :
    'movie__button movie__button_type_delete';

  return (
    <article className="movie">
      <img src={movie.img} alt={movie.name} className="movie__img" />
      <div className="movie__info">
        <div className="movie__title">
          <h2 className="movie__name">{movie.name}</h2>
          <button className={movieBtnClass} type="button"></button>
        </div>
        <p className="movie__time">{movie.duration}</p>
      </div>
    </article>
  );
};

export default MovieCard;
