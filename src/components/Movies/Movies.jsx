import React from "react";
import MovieCardList from "../MovieCardList/MovieCardList";

const Movies = (props) => {
  const { movies } = props
  return (
    <section className="movies">
      <MovieCardList
        movies={movies}
      />
      <button className="movies__more" type="button">Ещё</button>
    </section>
  );
};

export default Movies;
