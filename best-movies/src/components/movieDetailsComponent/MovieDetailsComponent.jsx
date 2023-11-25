import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import {} from "../../context/actions/actionCreator";
const MovieDetailsComponent = () => {
  const [movieDetails, SetMovieDetails] = useState(null);
  const { movie } = useParams();
  useEffect(() => {
    fetchData(`https://imdb-top-100-movies.p.rapidapi.com/top${movie}`, {
      headers: {
        "X-RapidAPI-Key": "6701f059c0msh364a2a0a6eb76eep153d47jsna5509114ec0f",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((data) => {
        SetMovieDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie]);
  return (
    <div>
      {movieDetails && (
        <div className="flex flex-wrap gap-4 justify-center">
          <img src={movieDetails.image} alt={movieDetails.title} />
          <div>
            <p>title: {movieDetails.title}</p>
            <p>year: {movieDetails.year}</p>
            <p>genre: {movieDetails.genre}</p>
            <p>director: {movieDetails.director}</p>
            <p>description: {movieDetails.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsComponent;
