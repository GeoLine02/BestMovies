import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useAppContext } from "../../context/AppContextProvider";
import Movie from "../../components/Movies/Movie";
import DeleteFavoritesBtn from "../../components/buttons/DeleteFavoritesBtn";

const Favorites = () => {
  const {
    state: { favorites },
  } = useAppContext();

  return (
    <div className={favorites.length >= 2 ? "h-full  md:h-screen" : "h-screen"}>
      <header className="py-3 px-3">
        <NavBar />
      </header>
      <main className="flex flex-wrap gap-4 justify-center mt-5 px-4">
        {favorites.map((movie) => {
          return (
            <div className="mb-3" key={movie.rank}>
              <Movie
                key={movie.rank}
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                rank={movie.rank}
              />
              <DeleteFavoritesBtn rank={movie.rank} />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Favorites;
