import React, { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const ProtectedRoute = lazy(() => import("./pages/Route/ProtectedRoute"));
const ScrollToTop = lazy(() => import("./pages/ScrollToTop/ScrollToTop"));
const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/Movie/MoviePage"));
const TvSeriesPage = lazy(() => import("./pages/TvSeries/TvSeriesPage"));
const MovieDetails = lazy(() => import("./pages/Movie/MovieDetails"));
const TvSeriesDetails = lazy(() => import("./pages/TvSeries/TvSeriesDetails"));
const WatchingMovie = lazy(() => import("./pages/Watch/WatchingMovie"));
const WatchingTvSeries = lazy(() => import("./pages/Watch/WatchingTvSeries"));
const MyList = lazy(() => import("./pages/MyList/MyList"));
const PageNotFound = lazy(() => import("./pages/NotFound/PageNotFound"));
const SearchKeyword = lazy(() => import("./pages/Search/SearchKeyword"));
const Login = lazy(() => import("./pages/Form/Login"));
const Register = lazy(() => import("./pages/Form/Register"));
const AccountPage = lazy(() => import("./pages/User/AccountPage"));
const AdminPage = lazy(() => import("./pages/Admin/AdminPage"));
const NotificationPage = lazy(() =>
  import("./pages/Notifications/NotificationPage")
);
const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header></Header>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="movies" element={<MoviePage></MoviePage>}></Route>
            <Route
              path="movie/:movieName/:movieID"
              element={<MovieDetails></MovieDetails>}></Route>
            <Route
              path="watch/:movieName/:movieID"
              element={<WatchingMovie></WatchingMovie>}></Route>
            <Route
              path="tvseries"
              element={<TvSeriesPage></TvSeriesPage>}></Route>
            <Route
              path="tvserie/:movieName/:movieID"
              element={<TvSeriesDetails></TvSeriesDetails>}></Route>
            <Route
              path="watchtv/:movieName/:movieID"
              element={<WatchingTvSeries></WatchingTvSeries>}></Route>
            <Route path="mylist" element={<MyList></MyList>}></Route>
            <Route
              path="search"
              element={<SearchKeyword></SearchKeyword>}></Route>
            <Route
              path="account"
              element={
                <ProtectedRoute>
                  <AccountPage></AccountPage>
                </ProtectedRoute>
              }></Route>
            <Route path="/admin" element={<AdminPage />}></Route>
            <Route
              path="/notification/:id"
              element={<NotificationPage />}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
