import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../context/AppContextProvider";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { deleteFavoriteAction } from "../../context/actions/actionCreator";

const Favorites = () => {
  const navigate = useNavigate();
  const {
    state: { favorites },
    dispatch,
  } = useAppContext();
  return (
    <div className="h-screen ">
      <header>
        <NavBar />
      </header>
      <main className="flex flex-wrap gap-4 justify-center">
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
              <div className="flex justify-between">
                <p>{movie.title}</p>
                <p>imdb {movie.rating}</p>
              </div>
              <div>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Favorites;
