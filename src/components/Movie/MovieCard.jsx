import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import Button from "../Button/Button";

const MovieCard = ({ data }) => {
  const { poster_path } = data;
  return (
    <div className="relative overflow-hidden group cursor-pointer rounded-lg">
      <div className="">
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
            className="text-sm hover:opacity-90"></Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
