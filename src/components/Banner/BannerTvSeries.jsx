import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
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
  return (
    <div className="w-full h-full overflow-hidden">
      {!loading ? (
        <Swiper
          autoplay={true}
          speed={1000}
          grabCursor={true}
          effect="fade"
          modules={[EffectFade]}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(e) => setActiveSlide(e.realIndex)}>
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
