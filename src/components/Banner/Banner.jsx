import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { movieApi } from "../../api/Api";
import Loading from "../Loading/Loading";
import BannerCard from "./BannerCard";

const Banner = ({ type = "popular", page = 1 }) => {
  const [movieBanner, setMovieBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await movieApi.getMovie(type, page);
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
          onSlideChange={(e) => setActiveSlide(e.realIndex)}>
          {movieBanner.length > 0 &&
            movieBanner.map((item, index) => (
              <SwiperSlide key={item.id}>
                <BannerCard
                  data={item}
                  isActive={index === activeSlide}></BannerCard>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Banner;
