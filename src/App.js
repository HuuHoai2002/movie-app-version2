import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Layout from "./pages/Layout/Layout";
import Header from "./components/Header/Header";
import { useMovies } from "./contexts/MovieContext";
// lazy components
const ProtectedRoute = lazy(() => import("./pages/Route/ProtectedRoute"));
const ScrollToTop = lazy(() => import("./pages/ScrollToTop/ScrollToTop"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
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
const UpdateInfo = lazy(() => import("./components/UpdateInfo/UpdateInfo"));
const ChangePassword = lazy(() =>
  import("./components/ChangePassword/ChangePassword")
);
const App = () => {
  const { setIsLogin } = useMovies();
  useEffect(() => {
    const auth = localStorage.getItem("isLogin");
    auth && setIsLogin(auth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movie/:movieName/:movieID" element={<MovieDetails />} />
          <Route path="watch/:movieName/:movieID" element={<WatchingMovie />} />
          <Route path="tvseries" element={<TvSeriesPage />} />
          <Route
            path="tvserie/:movieName/:movieID"
            element={<TvSeriesDetails />}
          />
          <Route
            path="watchtv/:movieName/:movieID"
            element={<WatchingTvSeries />}
          />
          <Route path="mylist" element={<MyList />} />
          <Route path="search" element={<SearchKeyword />} />
          <Route
            path="account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }>
            <Route
              path=""
              element={
                <Layout>
                  <UpdateInfo />
                  <ChangePassword />
                </Layout>
              }
            />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/notification/:id"
            element={
              <ProtectedRoute>
                <NotificationPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default App;
