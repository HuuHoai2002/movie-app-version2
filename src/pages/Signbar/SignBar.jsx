import React from "react";
import { NavLink } from "react-router-dom";
import { useMovies } from "../../contexts/MovieContext";

const SignBar = () => {
  const { handleSignOut, navigate } = useMovies();
  const handleClick = () => {
    handleSignOut();
    navigate("");
  };

  const activeLink = ({ isActive }) => (isActive ? "bg-primary" : "");
  return (
    <div className="w-[250px] h-[calc(100vh_-_90px)] sticky left-0 top-[90px] flex flex-col bg-[#111111] rounded-sm p-2 gap-y-2">
      <NavLink to="" className={activeLink}>
        <div className="flex items-center gap-x-5 p-2 rounded-sm cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          Tài khoản
        </div>
      </NavLink>
      <div
        className="flex items-center gap-x-5 p-2 rounded-sm cursor-pointer"
        onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        Đăng xuất
      </div>
    </div>
  );
};

export default SignBar;
