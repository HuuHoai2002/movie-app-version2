import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { movieApi } from "../../api/Api";
import BannerCard from "./BannerCard";

const Banner = ({ type = "popular" }) => {
  const [movieBanner, setMovieBanner] = useState([]);
  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await movieApi.getMovie(type);
        setMovieBanner(response?.results);
      } catch (error) {
        console.log(error);
      }
    };
    handleCallAPI();
  }, [type]);
  return (
    <div className="w-full h-full bg-transparent overflow-hidden">
      <Swiper
        autoplay={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}>
        {movieBanner &&
          movieBanner.length > 0 &&
          movieBanner.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerCard data={item}></BannerCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
