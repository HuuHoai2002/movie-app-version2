import React, { useCallback, useEffect, useReducer, useState } from "react";
import { searchWithKeyword } from "../../api/Api";
import Button from "../../components/Button/Button";
import MovieCard from "../../components/Movie/MovieCard";
import lodash from "lodash";
import useLocalStorage from "../../hooks/useLocalStorage";

const SearchKeyword = () => {
  const [values, setValues] = useState("");
  const [movies, setMovies] = useState([]);
  const [activeKeyword, setActiveKeyword] = useState(null);

  const handleSetValues = lodash.debounce((e) => {
    setValues(e.target.value);
    dispatch({ type: "ADD", payload: e.target.value });
    setActiveKeyword(null);
  }, 1000);

  const handleGetMovie = useCallback(async () => {
    try {
      const response = await searchWithKeyword(values, 1);
      response && setMovies(response?.results);
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);
  useEffect(() => {
    if (values) {
      handleGetMovie();
    } else {
      setMovies([]);
    }
  }, [handleGetMovie, values]);

  console.log(movies);
  const reducer = (listKeyword, action) => {
    switch (action.type) {
      case "ADD": {
        const newlistKeyword = [...listKeyword];
        const filter = newlistKeyword.some((item) =>
          item.includes(action.payload)
        );
        if (!filter) newlistKeyword.push(action.payload);
        setValue(newlistKeyword);
        return newlistKeyword;
      }
      default:
        throw new Error("Invalid Actions");
    }
  };
  const [storedValue, setValue] = useLocalStorage("keyword", []);
  const [listKeyword, dispatch] = useReducer(reducer, storedValue);

  const handleSearchKeyword = useCallback((item, index) => {
    setValues(item);
    setActiveKeyword(index);
  }, []);
  return (
    <div className="container-watch mb-5">
      <div className="flex items-start gap-x-2 my-10 flex-col gap-y-5">
        <input
          type="text"
          className="w-full bg-[#111111] p-5 text-center rounded-lg border-none outline-none text-xl font-medium"
          placeholder="Bạn muốn tìm gì hôm nay?"
          onChange={handleSetValues}
        />
        {listKeyword.length > 0 && (
          <div className="flex flex-col gap-y-3">
            <h1 className="text-white font-medium">
              Từ khóa bạn tìm kiếm gần đây
            </h1>
            <div className="flex items-center gap-5 flex-wrap">
              {listKeyword.map((item, index) => (
                <span
                  className={`py-2 px-5 rounded-lg bg-[#111111] text-secondary cursor-pointer ${
                    activeKeyword === index ? "!bg-primary text-white" : ""
                  }`}
                  key={item}
                  onClick={() => handleSearchKeyword(item, index)}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
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
              isTivi={item.media_type === "tv"}
              details={true}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default React.memo(SearchKeyword);
