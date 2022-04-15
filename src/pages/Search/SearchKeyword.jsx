import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchWithKeyword } from "../../api/Api";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/Movie/MovieCard";

const SearchKeyword = () => {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const handleGetMovie = useCallback(async () => {
    try {
      const response = await searchWithKeyword(keyword, page);
      const totalMovies = response?.results
        ? [...movies, ...response.results]
        : [];
      setMovies(page === 1 ? response?.results : totalMovies);
      setTotalPage(response.total_pages);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, page]);
  useEffect(() => {
    handleGetMovie();
  }, [handleGetMovie]);
  console.log(movies);
  return (
    <div className="container-watch">
      <div className="flex items-center gap-x-2 my-10">
        <h1 className="font-medium text-xl text-secondary">
          {movies.length > 0
            ? "Kết Quả Tìm Kiếm Cho Từ Khóa: "
            : "Không Tìm Thấy Kết Quả "}
        </h1>
        <span className="font-semibold text-xl text-white">"{keyword}"</span>
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
