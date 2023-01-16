import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieCardList = (props) => {
  const { movies, onSave, pathname, onDelete, classNameBtn, idSavedMovies } = props;

  return (
    <div className="movie-list">
      {
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id || movie._id}
              movie={movie}
              onSave={onSave}
              pathname={pathname}
              onDelete={onDelete}
              classNameBtn={classNameBtn}
              idSavedMovies={idSavedMovies}
            />
          )
        })
      }
    </div>
  );
};

export default MovieCardList;
