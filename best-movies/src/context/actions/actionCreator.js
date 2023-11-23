import actions from "./actions";

export const signInAction = (payload) => {
  return {
    type: actions.signIn,
    payload,
  };
};

export const signOutAction = () => {
  return {
    type: actions.signOut,
  };
};

export const addToFavoritesAction = (payload) => {
  return {
    type: actions.addToFavorites,
    payload,
  };
};

export const startMovisFetchingLoaderAction = () => {
  return {
    type: actions.startMoviesFetchingLoader,
  };
};

export const reportMoviesFetchingError = (payload) => {
  return {
    type: actions.reportMoviesFetchError,
    payload,
  };
};

export const saveMoviesDataAction = (payload) => {
  return {
    type: actions.saveMovies,
    payload,
  };
};
