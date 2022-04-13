import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/Movie/MoviePage"));
const TvSeriesPage = lazy(() => import("./pages/TvSeries/TvSeriesPage"));
const MovieDetails = lazy(() => import("./pages/Movie/MovieDetails"));
const TvSeriesDetails = lazy(() => import("./pages/TvSeries/TvSeriesDetails"));
const WatchingMovie = lazy(() => import("./pages/Watch/WatchingMovie"));
const WatchingTvSeries = lazy(() => import("./pages/Watch/WatchingTvSeries"));
const MyList = lazy(() => import("./pages/MyList/MyList"));
const FormAuth = lazy(() => import("./pages/Form/FormAuth"));
const PageNotFound = lazy(() => import("./pages/NotFound/PageNotFound"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="movie/:movieID"
              element={<MovieDetails></MovieDetails>}></Route>
            <Route
              path="watch/:movieID"
              element={<WatchingMovie></WatchingMovie>}></Route>
            <Route
              path="tvseries"
              element={<TvSeriesPage></TvSeriesPage>}></Route>
            <Route
              path="tvserie/:movieID"
              element={<TvSeriesDetails></TvSeriesDetails>}></Route>
            <Route
              path="watchtv/:movieID"
              element={<WatchingTvSeries></WatchingTvSeries>}></Route>
            <Route path="mylist" element={<MyList></MyList>}></Route>
            <Route path="auth" element={<FormAuth></FormAuth>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
