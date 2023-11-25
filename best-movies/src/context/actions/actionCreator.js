import actions from "./actions";

// Authentication

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

// // Aouthentication

//  // Favorites

export const addToFavoritesAction = (payload) => {
  return {
    type: actions.addToFavorites,
    payload,
  };
};

// // Favorites

// Movies Fetching

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
//  // Movies Fetching

// Movies Details Fetching

export const startMoviesDetailsFetchingLoader = () => {
  return {
    type: actions.startMoviesDetailsFetchingLoader,
  };
};

export const reportMovieDetailsFetchError = (payload) => {
  return {
    type: actions.reportMovieDetailsFetchError,
    payload,
  };
};

export const saveMovieDetails = (payload) => {
  return {
    type: actions.saveMovieDetails,
    payload,
  };
};
