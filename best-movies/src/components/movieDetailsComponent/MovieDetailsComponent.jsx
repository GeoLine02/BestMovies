import React from "react";
import { useParams } from "react-router-dom";
const MovieDetailsComponent = () => {
  const { movie } = useParams();
  return <div>MovieDetailsComponent</div>;
};

export default MovieDetailsComponent;
