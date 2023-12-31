import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
const Movie = ({ title, image, rank, rating }) => {
  const navigate = useNavigate();
  return (
    <div className="mb-3">
      <div>
        <img
          className="cursor-pointer"
          loading="lazy"
          onClick={() => {
            navigate(`${routes.movies}/${rank}`);
          }}
          src={image}
          alt={title}
        />
      </div>
      <div className="flex justify-between mt-2">
        <p>{title}</p>
        <p>imdb {rating}</p>
      </div>
    </div>
  );
};

export default Movie;
