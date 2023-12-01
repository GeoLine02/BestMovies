import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../context/AppContextProvider";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import appContextActions from "../../context/actions/actions";

const Favorites = () => {
  const navigate = useNavigate();
  const {
    state: { favorites },
    dispatch,
  } = useAppContext();

  const handleDelete = (movieId) => {
    dispatch({ type: appContextActions.deleteFavorite, payload: movieId });
  };
  return (
    <div className="h-full sm:h-screen">
      <header className="py-3 px-3">
        <NavBar />
      </header>
      <main className="flex flex-wrap gap-4 justify-center md:justify-normal mt-5 px-4">
        {favorites.map((movie) => {
          return (
            <div className="mb-3" key={movie.rank}>
              <div>
                <img
                  className="cursor-pointer"
                  loading="lazy"
                  onClick={() => {
                    navigate(`${routes.movies}/${movie.rank}`);
                  }}
                  src={movie.image}
                  alt={movie.title}
                />
              </div>
              <div className="flex justify-between mt-2">
                <p>{movie.title}</p>
                <p>imdb {movie.rating}</p>
              </div>
              <div>
                <button
                  className="w-full bg-red-600 py-3 rounded-lg mt-2"
                  onClick={() => {
                    handleDelete(movie.rank);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Favorites;
