import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MovieDetailsComponent from "../../components/movieDetailsComponent/MovieDetailsComponent";
const MovieDetails = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieDetailsComponent />
      </main>
    </div>
  );
};

export default MovieDetails;
