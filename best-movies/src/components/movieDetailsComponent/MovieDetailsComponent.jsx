import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../../api/fetchData";
import YouTube from "react-youtube";
import { useAppContext } from "../../context/AppContextProvider";
import { addToFavoritesAction } from "../../context/actions/actionCreator";
const MovieDetailsComponent = () => {
  const [movieDetails, SetMovieDetails] = useState(null);
  const [youtubeId, setYoutubeId] = useState(null);
  const { movie } = useParams();
  const { dispatch } = useAppContext();

  useEffect(() => {
    fetchData(`https://imdb-top-100-movies.p.rapidapi.com/top${movie}`, {
      headers: {
        "X-RapidAPI-Key": "f972f2e36emsh4b308c54fbf1050p19cd04jsnee23d04617b1",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    })
      .then((data) => {
        SetMovieDetails(data);
        setYoutubeId(data.trailer_youtube_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movie]);

  const handleAddFavorites = () => {
    dispatch(addToFavoritesAction(movieDetails));
  };

  return (
    <div className="h-full customMovieDetails:h-screen">
      {movieDetails && (
        <div className="flex flex-wrap gap-4 justify-center">
          <div>
            <img src={movieDetails.image} alt={movieDetails.title} />
            <div className="flex flex-col">
              <h1 className="text-3xl">{movieDetails.title}</h1>
              <div>
                <button
                  onClick={handleAddFavorites}
                  className="flex mx-auto border-2 border-gray-400 rounded-md py-3 px-3 hover:bg-white hover:text-black mt-3"
                >
                  Add to favorites
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <p>title: {movieDetails.title}</p>
              <p>year: {movieDetails.year}</p>
              <p>genre: {movieDetails.genre}</p>
              <p>director: {movieDetails.director}</p>
              <p className="">description: {movieDetails.description}</p>
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
