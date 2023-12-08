import React from "react";
import appContextActions from "../../context/actions/actions";
import { useAppContext } from "../../context/AppContextProvider";

const DeleteFavoritesBtn = ({ rank }) => {
  const { dispatch } = useAppContext();
  const handleDelete = (movieId) => {
    dispatch({ type: appContextActions.deleteFavorite, payload: movieId });
  };
  return (
    <div>
      <button
        className="w-full bg-red-600 py-3 rounded-lg mt-2"
        onClick={() => {
          handleDelete(rank);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteFavoritesBtn;
