import React from "react";
import { useParams } from "react-router-dom";

const WatchingMovie = () => {
  const { movieID } = useParams();
  return (
    <div className="container-watch">
      <div className="flex items-center justify-between">
        <div className="w-full max-w-[70%] h-[500px] rounded-lg">
          <iframe
            title="frame"
            id="iframe"
            src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieID}`}
            allowFullScreen={true}
            className="w-full h-full rounded-lg"
            frameBorder="0"></iframe>
        </div>
        <div className="w-full h-full max-w-[30%]"></div>
      </div>
    </div>
  );
};

export default WatchingMovie;
