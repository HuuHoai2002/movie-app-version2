import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import "./index.scss";
SwiperCore.use([Autoplay]);

const RunApp = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading></Loading>}>
        <RunApp />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
