import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import "./index.scss";
import { MovieProvider } from "./contexts/MovieContext";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
SwiperCore.use([Autoplay]);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
        <ToastContainer position="top-right" autoClose={5000} />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
