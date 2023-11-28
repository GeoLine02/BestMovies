import appContextActions from "./actions/actions";
import { parseToken } from "../utils/jwt";
import { checkToken } from "../utils/tokenChecker";

export const initialState = {
  isUserAuthenticated: false,
  isMoviesDataFetching: false,
  isMovieDetailsFetching: false,
  fetchMovieDetailsError: "",
  fetchMoviesError: "",
  user: {},
  favorites: [],
  movies: [],
};

export const appContextReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case appContextActions.signIn: {
      const token = actions.payload;
      const user = parseToken(token);
      checkToken(token);
      return { ...state, isUserAuthenticated: true, user };
    }

    case appContextActions.signOut: {
      checkToken();
      return { ...state, isUserAuthenticated: false, user: {} };
    }

    case appContextActions.saveMovies: {
      return { ...state, movies: actions.payload, isMoviesDataFetching: false };
    }

    case appContextActions.reportMoviesFetchError: {
      return {
        ...state,
        fetchMoviesError: actions.payload,
        isMoviesDataFetching: false,
      };
    }

    case appContextActions.startMoviesFetchingLoader: {
      return {
        ...state,
        isMoviesDataFetching: true,
      };
    }

    case appContextActions.startMoviesDetailsFetchingLoader: {
      return {
        ...state,
        isMovieDetailsFetching: true,
      };
    }

    case appContextActions.saveMovieDetails: {
      return {
        ...state,
        movieDetails: actions.payload,
        isMovieDetailsFetching: false,
      };
    }

    case appContextActions.reportMovieDetailsFetchError: {
      return {
        ...state,
        fetchMovieDetailsError: actions.payload,
        isMovieDetailsFetching: false,
      };
    }
    case appContextActions.addToFavorites: {
      return {
        ...state,
        favorites: [...state.favorites, actions.payload],
      };
    }
    default:
      return state;
  }
};
