import React, { Fragment } from "react";
import Banner from "../../components/Banner/Banner";

const MoviePage = () => {
  document.title = "Phim Chiếu Rạp";
  return (
    <Fragment>
      <Banner type="popular" page={5}></Banner>
    </Fragment>
  );
};

export default MoviePage;
