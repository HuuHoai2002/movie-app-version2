import React from "react";
import { useMovies } from "../../contexts/MovieContext";
import { getLastName } from "../../utils";

const UserPreview = ({ data }) => {
  const { navigate } = useMovies();
  return (
    <div
      className="flex items-center gap-x-2 relative group cursor-pointer hover:opacity-80 transition-all"
      onClick={() => navigate("/account")}>
      <div className="w-10 h-10">
        <img
          src={
            data?.photoURL ||
            "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-6&_nc_sid=dbb9e7&_nc_ohc=JnDLo_5PpjYAX_78uoL&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8Y7njbVzpUbOKgpMdA9DnSHcv7lCY8v4Dch91MjcnP6w&oe=629B01F8"
          }
          alt=""
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="flex items-center gap-x-1">
        <h1 className="text-whiten font-semibold">
          {getLastName(data?.displayName)}
        </h1>
        {/* <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default UserPreview;
