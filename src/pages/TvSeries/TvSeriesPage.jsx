import React, { Fragment } from "react";
import BannerTvSeries from "../../components/Banner/BannerTvSeries";

const TvSeriesPage = () => {
  document.title = "Phim Bộ";
  return (
    <Fragment>
      <BannerTvSeries type="popular" page={1}></BannerTvSeries>
    </Fragment>
  );
};

export default TvSeriesPage;
