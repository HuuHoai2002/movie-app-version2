import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import Button from "../Button/Button";
import ButtonPlay from "../Button/ButtonPlay";
import ButtonStar from "../Button/ButtonStar";

const BannerCard = ({ data }) => {
  const {
    id,
    original_title,
    overview,
    backdrop_path,
    release_date,
    vote_average,
    poster_path,
    title,
  } = data;
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,1)]"></div>
      <div className="w-full h-full">
        <img
          src={`${IMAGE_PATH}${backdrop_path}`}
          alt=""
          className="banner-image w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-2/4 -translate-y-2/4 left-10 flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <Button text={"Premium"} className="!rounded-lg"></Button>
            <ButtonStar text={vote_average}></ButtonStar>
          </div>
          <h1 className="text-5xl leading-[60px] font-medium max-w-[450px]">
            {title}
          </h1>
          <span className="text-secondary font-medium">
            {new Date(release_date).getFullYear()}
          </span>
        </div>
        <div className="max-w-[400px]">
          <div className="">
            <span className="text-truncate text-lg">{overview}</span>
            <span className="flex items-center gap-x-2 text-[15px] font-medium leading-4 text-[#239D61] underline cursor-pointer group">
              Xem chi tiết
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-2 transition-all"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
          <div></div>
        </div>
        <div>
          <ButtonPlay
            text={"Watch Now"}
            className="font-medium py-3"></ButtonPlay>
        </div>
      </div>
      <div className="absolute top-2/4 -translate-y-2/4 right-[300px] max-w-[500px]">
        <img
          src={`${IMAGE_PATH}${poster_path}`}
          alt=""
          className="w-full h-[350px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default BannerCard;
