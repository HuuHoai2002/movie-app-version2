import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { tiviSeriesApi } from "../../api/Api";
import MovieCard from "../Movie/MovieCard";

const TVSeriesList = ({ text = "", type = "", page = 1 }) => {
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
  return (
    <div className="container-movie overflow-hidden">
      <div>
        <div className="flex items-center gap-x-5">
          <h1 className="text-xl font-medium py-5">{text}</h1>
          <div className="flex items-center gap-x-2">
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
          </div>
        </div>
        <div className="w-full">
          <Swiper
            grabCursor={"true"}
            slidesPerView={6}
            spaceBetween={20}
            className="rounded-lg overflow-hidden">
            {movie &&
              movie.length > 0 &&
              movie.map((item) => (
                <SwiperSlide key={item.id}>
                  <MovieCard data={item}></MovieCard>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TVSeriesList);
