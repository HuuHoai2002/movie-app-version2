import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import { useMovies } from "../../contexts/MovieContext";
import Button from "../Button/Button";

const MovieCard = ({ data, isTivi = false }) => {
  const { id, poster_path } = data;
  const { handleNavigate } = useMovies();
  return (
    <div
      className="relative overflow-hidden group cursor-pointer rounded-lg flex flex-col gap-y-2"
      onClick={() => handleNavigate(`${isTivi ? "tvserie" : "movie"}`, id)}>
      <div>
        <img
          src={`${IMAGE_PATH}${poster_path}`}
          alt=""
          className="w-full h-[250px] rounded-lg transition-all"
        />
      </div>
      {isTivi && (
        <div className="absolute top-3 left-3">
          <Button
            text={`TV`}
            className="bg-transparent bg-red-500 py-1 text-sm px-3 rounded-md hover:opacity-100"></Button>
        </div>
      )}
      <div className="title-truncate">
        <h1 className="hover:text-primary font-medium transition-all text-[15px]">
          {data.title || data.name}
        </h1>
      </div>
    </div>
  );
};

export default MovieCard;
