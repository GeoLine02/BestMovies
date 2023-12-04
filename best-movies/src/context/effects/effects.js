import { fetchData } from "../../api/fetchData";
import {
  reportMoviesFetchingError,
  saveMoviesDataAction,
  startMovisFetchingLoaderAction,
} from "../actions/actionCreator";

export function fetchMoviesData(dispatch) {
  dispatch(startMovisFetchingLoaderAction());
  fetchData("https://imdb-top-100-movies.p.rapidapi.com/top100movies", {
    headers: {
      "X-RapidAPI-Key": "eb4f4c06bemsh10b96774f0a912ep1fc169jsnf77f6f60b7cd",
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
