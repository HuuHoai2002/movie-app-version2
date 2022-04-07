import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="movie" element={<MoviePage></MoviePage>}></Route>
          <Route path="tvseries" element={<div>Tivi Series</div>}></Route>
          <Route path="mylist" element={<div>My List</div>}></Route>
          <Route path="*" element={<div>Page Not Found</div>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
