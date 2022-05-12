import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { MovieProvider } from "./contexts/MovieContext";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
SwiperCore.use([Autoplay]);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          className="mt-20"
        />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
