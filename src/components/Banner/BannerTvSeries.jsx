import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { tiviSeriesApi } from "../../api/Api";
import Loading from "../Loading/Loading";
import BannerCard from "./BannerCard";

const BannerTvSeries = ({ type = "popular", page = 1 }) => {
  const [movieBanner, setMovieBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await tiviSeriesApi.getTiviSeries(type, page);
        setMovieBanner(response?.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleCallAPI();
  }, [page, type]);
  console.log(movieBanner);
  return (
    <div className="w-full h-full overflow-hidden">
      {!loading ? (
        <Swiper
          autoplay={true}
          speed={1000}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}
          modules={[Pagination]}>
          {movieBanner.length > 0 &&
            movieBanner.map((item, index) => (
              <SwiperSlide key={item.id}>
                <BannerCard
                  data={item}
                  isActive={index === activeSlide}
                  isTivi={true}></BannerCard>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default BannerTvSeries;
