import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MovieList from "../../components/Movies/MovieList";

const Movies = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default Movies;
