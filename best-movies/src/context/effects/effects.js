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
      "X-RapidAPI-Key": "ed71da4d8fmsh072006ce441740fp1de950jsn64ed97365c3d",
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
      "X-RapidAPI-Key": "ed71da4d8fmsh072006ce441740fp1de950jsn64ed97365c3d",
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
