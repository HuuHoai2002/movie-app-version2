import React, { Fragment } from "react";
import Banner from "../components/Banner/Banner";
import MovieList from "../components/Movie/MovieList";
import TVSeriesList from "../components/TVSeries/TVSeriesList";

const HomePage = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <MovieList
        text={"Phim Mới Thịnh Hành"}
        type="popular"
        page={6}></MovieList>
      <MovieList
        text={"Phim Chiếu Rạp Hay Nhất"}
        type="top_rated"
        page={2}></MovieList>
      <MovieList
        text={"Phim Chiếu Rạp Sắp Ra Mắt"}
        type="upcoming"
        page={1}></MovieList>
      <TVSeriesList
        text={"Phim Bộ Phổ Biến"}
        type="popular"
        page={1}></TVSeriesList>
      <TVSeriesList
        text={"Phim Bộ Hay Nhất"}
        type="top_rated"
        page={1}></TVSeriesList>
    </Fragment>
  );
};

export default React.memo(HomePage);
