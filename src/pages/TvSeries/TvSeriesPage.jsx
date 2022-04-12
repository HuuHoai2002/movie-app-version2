import React, { Fragment } from "react";
import BannerTvSeries from "../../components/Banner/BannerTvSeries";

const TvSeriesPage = () => {
  document.title = "Phim Bộ";
  return (
    <Fragment>
      <BannerTvSeries type="top_rated" page={10}></BannerTvSeries>
    </Fragment>
  );
};

export default TvSeriesPage;
