import React, { Fragment, useCallback, useEffect, useState } from "react";
import { tiviSeriesApi } from "../../api/Api";
import BannerTvSeries from "../../components/Banner/BannerTvSeries";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/Movie/MovieCard";
import lodash from "lodash";

const listContent = [
  {
    id: 1,
    title: "Mới Phát Sóng",
    to: "on_the_air",
  },
  {
    id: 2,
    title: "Phổ Biến",
    to: "popular",
  },
  {
    id: 3,
    title: "Điểm Cao Nhất",
    to: "top_rated",
  },
  {
    id: 4,
    title: "Phát Sóng Hôm Hay",
    to: "airing_today",
  },
];

const TvSeriesPage = () => {
  document.title = "Phim Bộ";
  const [activeContent, setActiveContent] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  const handleSetValues = lodash.debounce((e) => {
    setValue(e.target.value);
  }, 500);

  const handleGetMovie = useCallback(async () => {
    try {
      const response = await tiviSeriesApi.getTiviSeries(
        listContent[activeContent].to,
        page
      );
      const totalMovies = response?.results
        ? [...movies, ...response.results]
        : [];
      setMovies(page === 1 ? response?.results : totalMovies);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeContent, page]);

  const handleGetMovieWithSearch = useCallback(async () => {
    try {
      const response = await tiviSeriesApi.getTiviSeriesWithSearch(value);
      setMovies(response?.results);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, value]);

  useEffect(() => {
    if (value) {
      handleGetMovieWithSearch();
    } else {
      handleGetMovie();
    }
    return () => {
      setMovies([]);
    };
  }, [handleGetMovie, handleGetMovieWithSearch, value]);

  const handleOnClick = useCallback((index) => {
    setActiveContent(index);
    setPage(1);
  }, []);
  return (
    <Fragment>
      <BannerTvSeries type="top_rated" page={2}></BannerTvSeries>
      <div className="container-movie min-h-[50vw]">
        <div className="my-10 flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            {listContent.map((item, index) => (
              <span
                key={item.id}
                className={`${
                  activeContent === index
                    ? "font-semibold"
                    : "opacity-70 hover:opacity-50"
                } py-2 px-5 rounded-lg bg-[#111111] cursor-pointer`}
                onClick={() => handleOnClick(index)}>
                {item.title}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="text"
              className="w-[300px] py-2 px-3 rounded-lg outline-none border-none text-black"
              placeholder="Bạn tìm bộ phim nào hôm nay?"
              onChange={(e) => handleSetValues(e)}
            />
          </div>
        </div>
        {
          <div className="grid grid-cols-6 gap-5">
            {movies.length > 0 &&
              movies.map((item) => (
                <MovieCard data={item} key={item.id} isTivi={true}></MovieCard>
              ))}
          </div>
        }
        {!value && (
          <div className="my-5 flex items-center justify-center">
            <Button
              text={"Xem Thêm"}
              className="px-10 py-4 rounded-lg"
              onClick={() => setPage((page) => page + 1)}></Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default TvSeriesPage;
