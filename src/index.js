import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.scss";
import { MovieProvider } from "./contexts/MovieContext";
import App from "./App";
SwiperCore.use([Autoplay]);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
