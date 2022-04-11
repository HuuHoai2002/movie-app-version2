import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Form from "./pages/Form/Form";
import Login from "./pages/Form/Login";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/Movie/MovieDetails";
import MoviePage from "./pages/Movie/MoviePage";
import TvSeriesPage from "./pages/TvSeries/TvSeriesPage";
import WatchingMovie from "./pages/Watch/WatchingMovie";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="movie/:movieID"
            element={<MovieDetails></MovieDetails>}></Route>
          <Route
            path="watch/:movieID"
            element={<WatchingMovie></WatchingMovie>}></Route>
          <Route
            path="tvseries"
            element={<TvSeriesPage></TvSeriesPage>}></Route>
        </Route>
        <Route path="auth" element={<Form></Form>}></Route>
      </Routes>
    </Fragment>
  );
};

export default App;
