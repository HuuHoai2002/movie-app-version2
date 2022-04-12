import React from "react";
import { useParams } from "react-router-dom";
import BannerMovieDetails from "../Banner/BannerMovieDetails";
import MovieSimilar from "../../components/Movie/MovieSimilar";
const MovieDetails = () => {
  const { movieID } = useParams();
  return (
    <div className="w-full h-full">
      <BannerMovieDetails movieID={movieID}></BannerMovieDetails>
      <MovieSimilar text="Phim Liên Quan" movieID={movieID}></MovieSimilar>
    </div>
  );
};

export default MovieDetails;
