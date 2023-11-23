import { fetchData } from "../../api/fetchData";
import {
  reportMoviesFetchingError,
  saveMoviesDataAction,
  startMovisFetchingLoaderAction,
} from "../actions/actionCreator";

export function fetchMoviesData(dispatch) {
  dispatch(startMovisFetchingLoaderAction());
  fetchData("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      dispatch(saveMoviesDataAction(data));
    })
    .catch((err) => {
      dispatch(reportMoviesFetchingError(err.message));
    });
}
