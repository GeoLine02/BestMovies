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
