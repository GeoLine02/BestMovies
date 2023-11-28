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
      "X-RapidAPI-Key": "f523bba733msh12f90062045b9cfp12aa49jsn5e70c5a259c3",
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
