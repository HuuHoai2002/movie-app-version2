import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import { useMovies } from "../../contexts/MovieContext";
import Button from "../Button/Button";

const MovieCard = ({ data, isTivi = false }) => {
  const { id, poster_path } = data;
  const { handleNavigate } = useMovies();
  return (
    <div className="relative overflow-hidden group cursor-pointer rounded-lg">
      <div onClick={() => handleNavigate(`${isTivi ? "tv" : "movie"}`, id)}>
        <img
          src={`${IMAGE_PATH}${poster_path}`}
          alt=""
          className="w-full h-[250px] rounded-lg transition-all group-hover:scale-105"
        />
      </div>
      <div className="absolute bottom-2 w-full translate-y-[100px] group-hover:translate-y-[0] transition-all overflow-hidden">
        <div className="flex items-center justify-center">
          <Button
            text={"Watch Now"}
            onClick={() => handleNavigate("watch", id)}></Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
