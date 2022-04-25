import React from "react";
import { IMAGE_PATH } from "../../api/Api";
import Button from "../../components/Button/Button";
import ButtonPlay from "../../components/Button/ButtonPlay";
import { useMovies } from "../../contexts/MovieContext";

const BannerDetailsCard = ({ data, cast, isTivi = false }) => {
  const { handleNavigate, getName } = useMovies();
  const {
    backdrop_path,
    genres,
    overview,
    poster_path,
    runtime,
    title,
    release_date,
    id,
  } = data;
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.8)]"></div>
      <div className="w-full h-[50.5vw]">
        <img
          src={`${IMAGE_PATH}${backdrop_path}`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex justify-start gap-x-20 pl-7">
        <div className="max-w-[300px]">
          <img
            src={`${IMAGE_PATH}${poster_path}`}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-4xl leading-[50px] font-medium max-w-[450px]">
              {title || data.name}
            </h1>
            <div className="flex items-center gap-x-3 font-medium text-blue-500">
              <span>
                Phát hành:{" "}
                {new Date(release_date || data.first_air_date).getFullYear()},
              </span>
              {!isTivi ? (
                <span>Thời lượng: {runtime} phút</span>
              ) : (
                <span>
                  Số tập: {data.number_of_episodes} , {data.number_of_seasons}{" "}
                  Phần
                </span>
              )}
            </div>
            <div className="flex items-center gap-x-5">
              {genres &&
                genres.length > 0 &&
                genres
                  .slice(0, 3)
                  .map((item) => (
                    <Button
                      text={item.name}
                      key={item.id}
                      className="!bg-transparent text-center hover:opacity-100 border border-primary font-normal text-sm py-[8px]"></Button>
                  ))}
            </div>
          </div>
          <div className="max-w-[500px]">
            <div className="">
              <span className="text-truncate text-lg">
                {overview || "Bộ phim này chưa có nội dung tổng quát"}
              </span>
            </div>
          </div>
          <div className="mt-auto !inline">
            <ButtonPlay
              text={"Xem Ngay"}
              className="font-medium py-[12px]"
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
        <div className="flex flex-col gap-y-5">
          <h1 className="font-medium text-xl">Diễn Viên</h1>
          {cast &&
            cast.length > 0 &&
            cast.slice(0, 4).map((item) => (
              <div className="flex items-center gap-x-3" key={item.id}>
                <img
                  src={`${IMAGE_PATH}${item.profile_path}`}
                  alt=""
                  className="w-[60px] h-[60px] rounded-full object-cover"
                />
                <div className="font-medium">
                  <h1 className="text-purple-500">{item.name}</h1>
                  <span className="text-sm">{item.character}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BannerDetailsCard;
