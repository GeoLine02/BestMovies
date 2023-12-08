import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useAppContext } from "../../context/AppContextProvider";
import { fetchMovieDetails } from "../../context/effects/effects";
import AddFavoritesBtn from "../buttons/AddFavoritesBtn";
import { startMoviesDetailsFetchingLoader } from "../../context/actions/actionCreator";
import { DotLoader } from "react-spinners";

const MovieDetailsComponent = () => {
  const [youtubeId, setYoutubeId] = useState(null);
  const { movie } = useParams();
  const {
    state: { movieDetails, isMovieDetailsFetching },
    dispatch,
  } = useAppContext();

  useEffect(() => {
    dispatch(startMoviesDetailsFetchingLoader());
    fetchMovieDetails(dispatch, movie, setYoutubeId);
  }, [dispatch, movie]);

  return (
    <div className="h-full customMovieDetails:h-screen">
      {movieDetails && (
        <div className="flex flex-wrap gap-4 justify-center">
          {isMovieDetailsFetching && (
            <div className="h-screen absolute flex justify-center items-center">
              <DotLoader size={40} />
            </div>
          )}
          <div>
            <img src={movieDetails.image} alt={movieDetails.title} />
            <div className="flex flex-col">
              <h1 className="text-3xl">{movieDetails.title}</h1>
              <div>
                <AddFavoritesBtn movieDetails={movieDetails} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center px-4">
            <div>
              <p>title: {movieDetails.title}</p>
              <p>year: {movieDetails.year}</p>
              <p>genre: {movieDetails.genre}</p>
              <p>director: {movieDetails.director}</p>
              <p>description: {movieDetails.description}</p>
            </div>
            <div className="mt-5 video-container">
              {youtubeId && (
                <YouTube videoId={youtubeId} className="video-responsive" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsComponent;
