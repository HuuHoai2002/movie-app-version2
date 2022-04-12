import React from "react";
import { useParams } from "react-router-dom";
import TvSeriesSimilar from "../../components/TVSeries/TvSeriesSimilar";
import BannerTvSeriesDetails from "../Banner/BannerTvSeriesDetails";

const TvSeriesDetails = () => {
  const { movieID } = useParams();
  return (
    <div className="w-full h-full">
      <BannerTvSeriesDetails movieID={movieID}></BannerTvSeriesDetails>
      <TvSeriesSimilar
        movieID={movieID}
        text="Phim Liên Quan"></TvSeriesSimilar>
    </div>
  );
};

export default TvSeriesDetails;
