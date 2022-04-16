import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import { useMovies } from "../../contexts/MovieContext";
import Button from "../Button/Button";
import ButtonAdd from "../Button/ButtonAdd";
import ButtonDownload from "../Button/ButtonDownload";
import ButtonPlay from "../Button/ButtonPlay";
import ButtonStar from "../Button/ButtonStar";

const BannerCard = ({ data, isActive, isTivi = false }) => {
  const { handleNavigate, dispatchCarts } = useMovies();
  const { id, overview, backdrop_path, release_date, vote_average, title } =
    data;
  return (
    <div className="relative sm:mt-[50px]">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,1)]"></div>
      <div className="w-full h-[50.5vw] sm:h-[50vh]">
        <img
          src={`${IMAGE_PATH}${backdrop_path}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`absolute top-2/4 left-10 flex flex-col gap-y-7 sm:gap-y-3 sm:left-5 ${
          isActive ? "animation -translate-y-2/4" : "hidden"
        }`}>
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2 sm:hidden">
            <Button text={"Premium"} className="!rounded-lg"></Button>
            <ButtonStar text={vote_average}></ButtonStar>
          </div>
          <h1 className="text-4xl leading-[50px] font-medium max-w-[450px] sm:text-xl sm:max-w-[200px] sm:leading-5">
            {title || data.name}
          </h1>
          <span className="text-secondary font-medium">
            {new Date(release_date || data.first_air_date)
              .getFullYear()
              .toString()}
          </span>
        </div>
        <div className="max-w-[400px]">
          <div className="">
            <span className="text-truncate text-base sm:hidden">
              {overview || "Chưa có"}
            </span>
            <span
              className="flex items-center gap-x-2 text-[15px] leading-6 font-medium text-[#239D61] underline cursor-pointer group sm:text-sm"
              onClick={() =>
                handleNavigate(`${isTivi ? "tvserie" : "movie"}`, id)
              }>
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
            <div className="mt-5 flex items-center gap-x-5">
              <Tooltip title="Thêm vào danh sách" placement="top">
                <div>
                  <ButtonAdd
                    onClick={() =>
                      dispatchCarts({ type: "ADD", payload: data, id: data.id })
                    }></ButtonAdd>
                </div>
              </Tooltip>
              <Tooltip title="Tải về máy" placement="top">
                <div>
                  <ButtonDownload></ButtonDownload>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <div>
          <ButtonPlay
            text={"Xem Ngay"}
            className="font-medium py-3 w-[300px] sm:w-[150px] sm:py-2 sm:text-xs"
            onClick={() =>
              handleNavigate(`${isTivi ? "watchtv" : "watch"}`, id)
            }></ButtonPlay>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
