import React from "react";
import Movie from "./Movie";
import { useAppContext } from "../../context/AppContextProvider";
const MovieList = () => {
  const { state } = useAppContext();
  return (
    <div>
      <h1>Mvoie List</h1>
      {state.movies.map((movie, index) => {
        return <Movie key={index} name={movie.name} />;
      })}
    </div>
  );
};

export default MovieList;
