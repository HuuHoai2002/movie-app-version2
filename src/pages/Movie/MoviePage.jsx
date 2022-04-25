import React, { Fragment, useCallback, useEffect, useState } from "react";
import { movieApi } from "../../api/Api";
import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/Movie/MovieCard";
import lodash from "lodash";

const listContent = [
  {
    id: 1,
    title: "Xem Ngay",
    to: "now_playing",
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
];
const MoviePage = () => {
  document.title = "Phim Chiếu Rạp";
  const [activeContent, setActiveContent] = useState(0);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  const handleSetValues = lodash.debounce((e) => {
    setValue(e.target.value);
  }, 500);

  const handleGetMovie = useCallback(async () => {
    try {
      const response = await movieApi.getMovie(
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
      const response = await movieApi.getMovieWithSearch(value);
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
      <Banner type="popular" page={6}></Banner>
      <div className="container-movie min-h-[50vw]">
        <div className="my-10 flex items-center justify-between">
          <div className="flex items-center gap-x-10">
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
                <MovieCard data={item} key={item.id}></MovieCard>
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

export default MoviePage;
