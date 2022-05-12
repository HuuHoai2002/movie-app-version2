import React from "react";
import MovieCard from "../../components/Movie/MovieCard";
import { useMovies } from "../../contexts/MovieContext";

const MyList = () => {
  const { stateCarts } = useMovies();
  return (
    <div className="container-watch">
      {stateCarts ? (
        <div className="grid grid-cols-6 gap-5">
          {stateCarts.map((item) => (
            <MovieCard
              data={item}
              key={item.id}
              isTivi={item.first_air_date}
              details={"true"}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl font-medium text-red-500">
          Bạn chưa thêm bộ phim nào.
        </div>
      )}
    </div>
  );
};

export default MyList;
