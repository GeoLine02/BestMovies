import { fetchData } from "../../api/fetchData";
import {
  reportMovieDetailsFetchError,
  reportMoviesFetchingError,
  saveMovieDetails,
  saveMoviesDataAction,
  startMoviesDetailsFetchingLoader,
  startMovisFetchingLoaderAction,
} from "../actions/actionCreator";

export function fetchMoviesData(dispatch) {
  dispatch(startMovisFetchingLoaderAction());
  fetchData("https://imdb-top-100-movies.p.rapidapi.com/top100movies", {
    headers: {
      "X-RapidAPI-Key": "4eec0ff13emshdbdf906f9746e4cp1b5063jsnff24ea366eda",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  })
    .then((data) => {
      dispatch(saveMoviesDataAction(data));
    })
    .catch((err) => {
      dispatch(reportMoviesFetchingError(err.message));
    });
}

export function fetchMovieDetails(dispatch, movie, setYoutubeId) {
  dispatch(startMoviesDetailsFetchingLoader());
  fetchData(`https://imdb-top-100-movies.p.rapidapi.com/top${movie}`, {
    headers: {
      "X-RapidAPI-Key": "4eec0ff13emshdbdf906f9746e4cp1b5063jsnff24ea366eda",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  })
    .then((data) => {
      dispatch(saveMovieDetails(data));
      setYoutubeId(data.trailer_youtube_id);
    })
    .catch((err) => {
      dispatch(reportMovieDetailsFetchError(err.message));
    });
}
