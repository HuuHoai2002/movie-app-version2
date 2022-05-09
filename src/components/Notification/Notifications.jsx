import React from "react";
import { useMovies } from "../../contexts/MovieContext";

const Notifications = ({ notifications }) => {
  const { navigate } = useMovies();
  return (
    <div
      className={`absolute bg-[#111111] w-[400px] max-h-[300px] top-10 right-0 rounded-lg px-3 pb-3 shadow-[#292c36] shadow-xl overflow-auto transition-all noti-animation 
      `}>
      <h1 className="font-medium p-3 text-white sticky top-0 bg-inherit">
        Thông Báo
      </h1>
      {notifications.length > 0 &&
        notifications.map((item) => (
          <div
            className="w-full text-secondary p-3 rounded-lg flex items-center gap-x-2 justify-start hover:bg-[#2b2a2a] transition-all z-1"
            key={item.id}
            onClick={() => navigate(`/notification/${item.id}`)}>
            <span className="max-w-10">
              <img
                src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-6&_nc_sid=dbb9e7&_nc_ohc=6QK3XFQzdhwAX-muTmH&_nc_ht=scontent.fhan4-3.fna&oh=00_AT98c1o3khz4l7RmPqD84rrEf7JQfxRZ1L4xtBq9nbVDTg&oe=629B01F8"
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
            </span>
            <p className="flex-1 leading-0 text-sm">
              <span className="font-medium text-base text-primary mr-2">
                {item.author}:
              </span>
              {item.content}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Notifications;
