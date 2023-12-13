import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MovieList from "../../components/Movies/MovieList";
import Footer from "../../components/Footer/Footer";

const Movies = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieList />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Movies;
