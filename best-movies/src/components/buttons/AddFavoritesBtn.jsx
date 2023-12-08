import React from "react";
import { useAppContext } from "../../context/AppContextProvider";
import { addToFavoritesAction } from "../../context/actions/actionCreator";
const AddFavoritesBtn = ({ movieDetails }) => {
  const { dispatch } = useAppContext();
  const handleAddFavorites = () => {
    dispatch(addToFavoritesAction(movieDetails));
  };
  return (
    <div>
      <button
        onClick={handleAddFavorites}
        className="flex mx-auto border-2 border-gray-400 rounded-md py-3 px-3 hover:bg-white hover:text-black mt-3"
      >
        Add to favorites
      </button>
    </div>
  );
};

export default AddFavoritesBtn;
