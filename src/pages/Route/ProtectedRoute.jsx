import React, { Fragment, useEffect, useState } from "react";
import Login from "../Form/Login";

const ProtectedRoute = ({ children }) => {
  const [isLogin, setIsLogin] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("isLogin");
    auth && setIsLogin(auth);
  }, []);
  return <Fragment>{isLogin === "login" ? children : <Login />}</Fragment>;
};

export default ProtectedRoute;
