import React, { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { movieApi } from "../../api/Api";
import Loading from "../Loading/Loading";
import BannerCard from "./BannerCard";

const Banner = ({ type = "popular" }) => {
  const [movieBanner, setMovieBanner] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleCallAPI = async () => {
      try {
        const response = await movieApi.getMovie(type);
        setMovieBanner(response?.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    handleCallAPI();
  }, [type]);
  return (
    <div className="w-full h-full bg-transparent overflow-hidden">
      {!loading ? (
        <Swiper
          autoplay={true}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}>
          {movieBanner.length > 0 &&
            movieBanner.map((item) => (
              <SwiperSlide key={item.id}>
                <BannerCard data={item}></BannerCard>
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
