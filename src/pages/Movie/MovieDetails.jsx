import React from "react";
import { useParams } from "react-router-dom";
import BannerDetails from "../Banner/BannerDetails";
import MovieSimilar from "../../components/Movie/MovieSimilar";
const MovieDetails = () => {
  const { movieID } = useParams();
  return (
    <div className="w-full h-full">
      <BannerDetails movieID={movieID}></BannerDetails>
      <MovieSimilar text="Phim Liên Quan" movieID={movieID}></MovieSimilar>
    </div>
  );
};

export default MovieDetails;
