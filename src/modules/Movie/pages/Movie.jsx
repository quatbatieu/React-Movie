import React from "react";
import { useParams } from "react-router-dom";
import scss from "./style.module.scss";
import Overview from "../components/Overview";
import Showtimes from "../components/Showtimes";

const Movie = () => {
  const { movieId } = useParams();

  return (
    <div className={scss.container}>
      <Overview movieId={movieId} />
      <Showtimes movieId={movieId} />
    </div>
  );
};

export default Movie;
