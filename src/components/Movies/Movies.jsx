import React from "react";
import MovieCardList from "../MovieCardList/MovieCardList";
import SearchForm from '../SearchForm/SearchForm'

const Movies = (props) => {
  const { movies } = props
  return (
    <main className="content">
      <section className="movies">
        <SearchForm />
        <MovieCardList movies={movies} />
        <button className="movies__more" type="button">Ещё</button>
      </section>
    </main>
  );
};

export default Movies;
