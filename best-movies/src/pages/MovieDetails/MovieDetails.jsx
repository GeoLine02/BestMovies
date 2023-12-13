import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import MovieDetailsComponent from "../../components/movieDetailsComponent/MovieDetailsComponent";
import Footer from "../../components/Footer/Footer";
const MovieDetails = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieDetailsComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MovieDetails;
