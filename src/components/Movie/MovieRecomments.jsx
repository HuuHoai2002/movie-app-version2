import React, { useEffect, useState, useCallback, Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { movieApi } from "../../api/Api";
import MovieCard from "./MovieCard";
import Tooltip from "@mui/material/Tooltip";

const MovieRecomments = ({ text = "", movieID, page = 1 }) => {
  const [changePage, setChangePage] = useState(page);
  const [totalPage, setTotalPage] = useState(page);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await movieApi.getMovieRecomments(movieID, changePage);
        setMovie(response?.results);
        setTotalPage(response.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    handleCallAPI();
  }, [movieID, changePage]);
  const handleNextPage = useCallback(() => {
    setChangePage((page) => page + 1);
  }, []);
  const handlePrePage = useCallback(() => {
    setChangePage((page) => page - 1);
  }, []);
  return (
    <div className="overflow-hidden">
      <Fragment>
        <div className="flex items-center gap-x-5 pb-5">
          <h1 className="font-medium text-primary text-xl">{text}</h1>
          <div className="flex items-center gap-x-2">
            <Tooltip title="Trang trước" placement="top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-all hover:scale-150 cursor-pointer"
                viewBox="0 0 24 24"
                stroke="currentColor"
                visibility={changePage === page ? "hidden" : ""}
                onClick={handlePrePage}
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Tooltip>
            <Tooltip title="Trang sau" placement="top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transition-all hover:scale-150 cursor-pointer"
                viewBox="0 0 24 24"
                stroke="currentColor"
                visibility={changePage === totalPage ? "hidden" : ""}
                onClick={handleNextPage}
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Tooltip>
            {changePage !== page && (
              <div className="flex items-center gap-x-1 font-medium">
                <span className="text-blue-600">{changePage}</span>/
                <span>{totalPage}</span>
              </div>
            )}
          </div>
        </div>
        <div className="w-full rounded-lg">
          <Swiper
            spaceBetween={20}
            grabCursor={"true"}
            freeMode={true}
            modules={[FreeMode]}
            slidesPerView={6}
            className="rounded-lg overflow-hidden">
            {movie &&
              movie.length > 0 &&
              movie.map((item) => (
                <SwiperSlide key={item.id} className="overflow-hidden">
                  <MovieCard data={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Fragment>
    </div>
  );
};

export default React.memo(MovieRecomments);
