import { Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { tiviSeriesApi } from "../../api/Api";
import MovieCard from "../Movie/MovieCard";

const TVSeriesList = ({
  text = "",
  type = "",
  page = 1,
  isActiveChangePages = false,
}) => {
  const [changePage, setChangePage] = useState(page);
  const [totalPage, setTotalPage] = useState(page);

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await tiviSeriesApi.getTiviSeries(type, changePage);
        setMovie(response?.results);
        setTotalPage(response.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    handleCallAPI();
  }, [type, changePage]);
  const handleNextPage = () => {
    setChangePage((page) => page + 1);
  };
  const handlePrePage = () => {
    setChangePage((page) => page - 1);
  };
  const swiperRef = React.useRef(null);
  return (
    <div className="container-movie overflow-hidden">
      {movie && movie.length > 0 && (
        <Fragment>
          <div className="flex items-center gap-x-5">
            <h1 className="text-xl font-medium py-5">{text}</h1>
            {isActiveChangePages && (
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
              </div>
            )}
          </div>
          <div className="w-full rounded-lg relative">
            <Swiper
              spaceBetween={20}
              grabCursor={"true"}
              slidesPerView={6}
              freeMode={true}
              modules={[FreeMode]}
              ref={swiperRef}
              className="rounded-lg overflow-hidden">
              {movie.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="hover:scale-95 hover:z-[99999] transition-all">
                  <MovieCard data={item} isTivi={true}></MovieCard>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-[40%] -left-6 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 group-hover:scale-150 transition-all cursor-pointer`}
                onClick={() => swiperRef.current.swiper.slidePrev()}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="absolute top-[40%] -right-6 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 group-hover:scale-150 transition-all cursor-pointer`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => swiperRef.current.swiper.slideNext()}
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default React.memo(TVSeriesList);
