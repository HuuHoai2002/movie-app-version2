import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_PATH, movieApi } from "../../api/Api";
import MovieRecomments from "../../components/Movie/MovieRecomments";

const WatchingMovie = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = React.useState(null);
  const handleGetMovieReviews = useCallback(async (movieID) => {
    try {
      const response = await movieApi.getMovieReviews(movieID);
      setReviews(response?.results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    handleGetMovieReviews(movieID);
  }, [handleGetMovieReviews, movieID]);
  console.log(reviews);
  const checkUrl = (url) => {
    return url.includes("https://" || "http://" || "www://");
  };
  const cutUrl = (url) => {
    return url.slice(1, url.length);
  };
  return (
    <div className="container-watch">
      <div className="flex flex-col gap-y-7">
        <div className="w-full h-[600px] rounded-lg">
          <iframe
            title="frame"
            id="iframe"
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
            allowFullScreen={true}
            className="w-full h-full rounded-lg"
            frameBorder="0"></iframe>
        </div>
        <div className="flex flex-col gap-y-5 w-full max-w-[70%]">
          <div>
            <h1 className="text-xl font-medium">Bình Luận</h1>
          </div>
          {reviews && reviews.length > 0 ? (
            reviews.map((item) => (
              <div
                className="flex gap-x-5 border-b border-[#4E4E51] pb-5"
                key={item.id}>
                <div className="w-12 h-12">
                  <img
                    src={`${
                      item.author_details.avatar_path === null
                        ? "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=MJ4UyDqikisAX9jA2vV&_nc_ht=scontent.fhan3-2.fna&oh=00_AT9KhGUAUNhYUEPv2jbITGTQzUH4Y5fquxLQAISRIONMUQ&oe=6263A2F8"
                        : checkUrl(item.author_details.avatar_path)
                        ? cutUrl(item.author_details.avatar_path)
                        : IMAGE_PATH + item.author_details.avatar_path
                    }`}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h1 className="font-medium text-purple-600 leading-7">
                      {item.author}
                    </h1>
                    <span className="text-secondary text-sm">
                      {new Date(item.created_at).toUTCString()}
                    </span>
                  </div>
                  <span className="text-truncate text-sm">{item.content}</span>
                </div>
              </div>
            ))
          ) : (
            <div>Bộ phim này chưa có bình luận nào...</div>
          )}
        </div>

        <div className="my-5">
          <MovieRecomments movieID={movieID} text="Gợi Ý"></MovieRecomments>
        </div>
      </div>
    </div>
  );
};

export default WatchingMovie;
