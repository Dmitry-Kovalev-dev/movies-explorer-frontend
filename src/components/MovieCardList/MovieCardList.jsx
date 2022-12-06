import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieCardList = (props) => {
  const { movies } = props;
  return (
    <div className="movie-list">
      {movies.map((movie, index) => {
        return (
          <MovieCard
            key={index}
            movie={movie}
          />
        )
      })}
    </div>
  );
};

export default MovieCardList;
