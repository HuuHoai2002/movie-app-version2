import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.scss";
import { MovieProvider } from "./contexts/MovieContext";
SwiperCore.use([Autoplay]);

const RunApp = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider>
        <Suspense fallback={<Loading></Loading>}>
          <RunApp />
        </Suspense>
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
