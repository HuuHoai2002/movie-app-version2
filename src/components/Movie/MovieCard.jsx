import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import { useMovies } from "../../contexts/MovieContext";
import Button from "../Button/Button";

const MovieCard = ({ data, isTivi = false }) => {
  const { id, poster_path } = data;
  const { handleNavigate } = useMovies();
  return (
    <div className="relative overflow-hidden group cursor-pointer rounded-lg">
      <div
        onClick={() => handleNavigate(`${isTivi ? "tvserie" : "movie"}`, id)}>
        <img
          src={`${IMAGE_PATH}${poster_path}`}
          alt=""
          className="w-full h-[250px] rounded-lg transition-all group-hover:scale-105"
        />
      </div>
      {isTivi && (
        <div className="absolute top-3 left-3">
          <Button
            text={`TV`}
            className="bg-transparent bg-red-500 py-1 text-sm px-3 rounded-md hover:opacity-100"></Button>
        </div>
      )}
      <div className="absolute bottom-2 w-full translate-y-[100px] group-hover:translate-y-[0] transition-all overflow-hidden">
        <div className="flex items-center justify-center">
          <Button
            text={"Xem Ngay"}
            onClick={() =>
              handleNavigate(`${isTivi ? "watchtv" : "watch"}`, id)
            }></Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
