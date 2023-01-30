import React from 'react';
import { formattingTime } from '../../utils/utils';
import { pathValue } from '../../utils/constants';

const MovieCard = (props) => {
  const { movie, onSave, pathname, onDelete, classNameBtn, idSavedMovies } = props;

  const savingMovie = () => {
    onSave(movieInfo);
  };

  const deleteMovie = () => {
    if (pathname === pathValue.movies) {
      onDelete(movie.id);
    } else {
      onDelete(movie._id);
    }
  };

  const movieInfo = {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    trailerLink: movie.trailerLink,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };

  let actionButton;

  if (pathname === pathValue.movies) {

    movieInfo.image = `https://api.nomoreparties.co${movie.image.url}`;
    movieInfo.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;

    actionButton = (
      <button
        className={
          idSavedMovies.includes(movie.id) ?
            "movie__button movie__button_type_active" :
            classNameBtn
        }
        type="button"
        onClick={
          idSavedMovies.includes(movie.id) ?
            deleteMovie :
            savingMovie
        }
      >
      </button>
    );

  } else {

    movieInfo.image = movie.image;
    movieInfo.thumbnail = movie.thumbnail;

    actionButton = (
      <button
        className={classNameBtn}
        type="button"
        onClick={deleteMovie}>
      </button>
    );
  };

  return (
    <article className="movie" >
      <a href={movieInfo.trailerLink} target="_blank" rel="noopener noreferrer">
        <img src={movieInfo.image} alt={movieInfo.nameRU} className="movie__img" />
      </a>
      <div className="movie__info">
        <div className="movie__title">
          <h2 className="movie__name">{movieInfo.nameRU}</h2>
          {actionButton}
        </div>
        <p className="movie__time">{formattingTime(movieInfo.duration)}</p>
      </div>
    </article >
  );
};

export default MovieCard;
