import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/Movie/MovieDetails";
import MoviePage from "./pages/Movie/MoviePage";
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
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
