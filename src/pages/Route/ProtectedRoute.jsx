import React, { Fragment } from "react";
import { useMovies } from "../../contexts/MovieContext";
import Login from "../Form/Login";

const ProtectedRoute = ({ children }) => {
  const { isLogin } = useMovies();
  return <Fragment>{isLogin === "login" ? children : <Login />}</Fragment>;
};

export default ProtectedRoute;
