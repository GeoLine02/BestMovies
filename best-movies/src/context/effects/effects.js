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
      "X-RapidAPI-Key": "b89ce74cecmshf1d5f6de5c48ebap129f56jsne5dc6981716a",
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
