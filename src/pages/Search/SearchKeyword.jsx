import React, { useCallback, useEffect, useState } from "react";
import { searchWithKeyword } from "../../api/Api";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/Movie/MovieCard";
import lodash from "lodash";

const SearchKeyword = () => {
  const [values, setValues] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleSetValues = lodash.debounce((e) => {
    setValues(e.target.value);
  }, 1000);

  const handleGetMovie = useCallback(async () => {
    try {
      const response = await searchWithKeyword(values, page);
      const totalMovies = response?.results
        ? [...movies, ...response.results]
        : [];
      setMovies(page === 1 ? response?.results : totalMovies);
      setTotalPage(response.total_pages);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, page]);
  useEffect(() => {
    if (values) {
      handleGetMovie();
    } else {
      setMovies([]);
    }
  }, [handleGetMovie, values]);
  return (
    <div className="container-watch">
      <div className="flex items-start gap-x-2 my-10 flex-col gap-y-10">
        <input
          type="text"
          className="w-full bg-[#111111] p-5 text-center rounded-lg border-none outline-none text-xl font-medium"
          placeholder="Bạn muốn tìm gì hôm nay?"
          onChange={handleSetValues}
        />
        <div>
          {values && movies.length > 0 ? (
            <div className="flex items-center justify-center gap-x-1">
              <h1 className="text-secondary font-medium text-xl">
                Kết quả cho từ khóa:{" "}
              </h1>
              <span className="text-white font-medium text-xl">"{values}"</span>
            </div>
          ) : (
            values && (
              <div className="flex items-center justify-center gap-x-1">
                <h1 className="text-secondary font-medium text-xl">
                  Không có kết quả cho từ khóa:{" "}
                </h1>
                <span className="text-white font-medium text-xl">
                  "{values}"
                </span>
              </div>
            )
          )}
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard
              data={item}
              key={item.id}
              isTivi={item.media_type === "tv"}></MovieCard>
          ))}
      </div>
      <div className="my-5 flex items-center justify-center">
        {movies.length > 0 && totalPage > page ? (
          <Button
            text={"Xem Thêm"}
            className="px-10 py-4 rounded-lg"
            onClick={() => setPage((page) => page + 1)}></Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchKeyword);
