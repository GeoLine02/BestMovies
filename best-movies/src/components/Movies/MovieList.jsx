import React from "react";
import Movie from "./Movie";
import { useAppContext } from "../../context/AppContextProvider";
const MovieList = () => {
  const { state } = useAppContext();
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {state.movies.map((movie) => {
        return (
          <Movie
            key={movie.rank}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
            rank={movie.rank}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
