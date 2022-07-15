import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import { useMovies } from "../../contexts/MovieContext";
import ButtonAdd from "../Button/ButtonAdd";
import ButtonDownload from "../Button/ButtonDownload";
import ButtonPlay from "../Button/ButtonPlay";

const BannerCard = ({ data, isActive, isTivi = false }) => {
  const { handleNavigate, dispatchCarts, getName } = useMovies();
  const { id, overview, backdrop_path, release_date, title, original_title } =
    data;
  return (
    <div className="relative sm:mt-[50px]">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,1)]"
        onClick={() =>
          handleNavigate(
            `${
              isTivi
                ? `tvserie/${getName(title || data.name)}`
                : `movie/${getName(title || data.name)}`
            }`,
            id
          )
        }></div>
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
          <h1 className="font-inter text-4xl leading-[50px] font-semibold max-w-[450px] sm:text-xl sm:max-w-[200px] sm:leading-5">
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
            <span className="text-truncate font-inter text-base sm:hidden opacity-80">
              {overview || "Chưa có"}
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
            className="font-medium !py-3 rounded-[50px] w-[250px] sm:w-[150px] sm:py-2 sm:text-xs"
            onClick={() =>
              handleNavigate(
                `${
                  isTivi
                    ? `watchtv/${getName(title || data.name)}`
                    : `watch/${getName(title || data.name)}`
                }`,
                id
              )
            }></ButtonPlay>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
