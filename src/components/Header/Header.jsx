import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useMovies } from "../../contexts/MovieContext";
import useClickOutSide from "../../hooks/useClickOutSide";
import Button from "../Button/Button";
import { ListLink } from "./ListLink";
import UserPreview from "./UserPreview";
import Notifications from "../Notification/Notifications";

const Header = () => {
  //background
  const [background, setBackground] = useState(false);
  //Search
  // const handleNavigate = useNavigate();
  //Notifications
  const { show, setShow, nodeRef } = useClickOutSide();
  const { notifications } = useMovies();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeLink = ({ isActive }) =>
    isActive ? "text-primary" : "hover:text-white hover:opacity-80";

  // user login
  const { userInfo } = useMovies();
  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 z-[99999] h-[70px] px-7 w-full flex items-center ${
          background ? "!bg-[#111111]" : ""
        }`}>
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center gap-x-7 text-secondary font-medium">
            <NavLink to={"/"}>
              <svg width="70" height="32" viewBox="0 0 86 32" fill="none">
                <g clipPath="url(#logo-tet-2022_svg__clip0_16581_67962)">
                  <path
                    d="M69.469.282a15.84 15.84 0 0 0-10.101 3.62 15.889 15.889 0 0 0-5.488 9.236 11.485 11.485 0 0 0-.714-.844 11.93 11.93 0 0 0-3.442-2.555 11.547 11.547 0 0 0-4.275-1.161L49.552.113h-8.377l-7.063 14.732c-.165.331-.33.662-.45.993-.3-.638-.66-1.246-1.073-1.817a11.79 11.79 0 0 0-4.704-3.878l4.86-10.03H17.812l-2.884 7.522h5.804l-4.275 8.911h6.524c.549-.005 1.093.1 1.6.311.488.2.936.49 1.32.854.381.366.693.798.922 1.274.235.483.374 1.009.407 1.545a3.846 3.846 0 0 1-.407 1.522 4.606 4.606 0 0 1-.921 1.258c-.386.362-.833.65-1.322.85-.505.218-1.049.33-1.599.331-1.918 0-3.508-.882-4.77-2.647l-.584-.758-.36.354-4.275 4.021a13.718 13.718 0 0 0 4.387 4.815A10.067 10.067 0 0 0 22.996 32c1.352.005 2.694-.23 3.964-.695a12.283 12.283 0 0 0 3.419-1.903 11.322 11.322 0 0 0 2.586-2.889c.31-.492.581-1.006.813-1.539a12.166 12.166 0 0 0 2.263 3.376 11.794 11.794 0 0 0 3.532 2.551c1.369.648 2.851 1.02 4.363 1.099h1.259a11.449 11.449 0 0 0 4.318-1.099 11.852 11.852 0 0 0 3.534-2.551 12.278 12.278 0 0 0 2.386-3.64c.105-.255.201-.513.29-.775a15.891 15.891 0 0 0 7.654 6.715 15.858 15.858 0 0 0 10.15.684 15.881 15.881 0 0 0 8.484-5.626 15.928 15.928 0 0 0 3.335-9.628 15.863 15.863 0 0 0-4.67-11.196A15.81 15.81 0 0 0 69.47.282zM48.442 21.924a4.302 4.302 0 0 1-.901 1.323c-.448.442-.985.78-1.576.993a3.803 3.803 0 0 1-1.133.235 4.189 4.189 0 0 1-1.946-.331 4.601 4.601 0 0 1-1.351-.894 4.043 4.043 0 0 1-1.252-2.902c-.012-.588.1-1.172.33-1.714.213-.506.527-.963.922-1.343.393-.377.85-.68 1.35-.894a4.185 4.185 0 0 1 1.933-.33c.39.023.773.102 1.14.234a4.366 4.366 0 0 1 1.583.993c.37.374.669.814.878 1.297a4.203 4.203 0 0 1 .023 3.34v-.008zm29.52-2.26a9.337 9.337 0 0 1-1.955 2.868 9.416 9.416 0 0 1-3.515 2.174 8.25 8.25 0 0 1-2.313.477 9.1 9.1 0 0 1-4.294-.708 10.015 10.015 0 0 1-2.93-1.943 8.819 8.819 0 0 1-2.732-6.466 8.926 8.926 0 0 1 .73-3.547 8.816 8.816 0 0 1 2.021-2.922 10.025 10.025 0 0 1 2.93-1.946 9.087 9.087 0 0 1 4.295-.705 8.18 8.18 0 0 1 2.313.477 9.403 9.403 0 0 1 3.498 2.174 9.127 9.127 0 0 1 1.952 2.922 8.868 8.868 0 0 1 .73 3.547 8.752 8.752 0 0 1-.73 3.597z"
                    fill="url(#logo-tet-2022_svg__paint0_linear_16581_67962)"></path>
                  <path
                    d="M73.734 15.202l-2.812-1.618-2.81-1.615a.93.93 0 0 0-1.382.8v6.464a.934.934 0 0 0 1.394.804l2.812-1.618 2.81-1.615a.919.919 0 0 0-.012-1.602zM4.75 7.571H2.808V1.516H1.302A1.3 1.3 0 0 1 0 .212V0h7.558l.87 1.516H4.75V7.57z"
                    fill="#fff"></path>
                  <path
                    d="M8.84 0a.815.815 0 0 1 .77.543l1.827 5.083c.033.106.086.162.148.162.063 0 .103-.056.152-.162L13.544.559A.85.85 0 0 1 14.35 0h1.48l-2.689 6.642a1.8 1.8 0 0 1-.538.747 1.65 1.65 0 0 1-1.018.268 1.54 1.54 0 0 1-1.566-1.015L7.345 0H8.84z"
                    fill="#fff"></path>
                </g>
                <defs>
                  <linearGradient
                    id="logo-tet-2022_svg__paint0_linear_16581_67962"
                    x1="49.163"
                    y1="-2.124"
                    x2="49.163"
                    y2="31.434"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ED2D24"></stop>
                    <stop offset="0.51" stopColor="#E92231"></stop>
                    <stop offset="1" stopColor="#B92032"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </NavLink>
            {ListLink.map((item) => (
              <NavLink to={item.to} key={item.id} className={activeLink}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-x-7">
            <NavLink
              to="search"
              className="cursor-pointer flex items-center gap-x-2 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </NavLink>
            <div className="cursor-pointer relative" ref={nodeRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                onClick={() => setShow(!show)}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-3xl bg-primary text-xs flex items-center justify-center">
                {notifications.length}
              </div>
              {show && <Notifications notifications={notifications} />}
            </div>
            <div>
              {userInfo ? (
                <UserPreview data={userInfo} />
              ) : (
                <Link to={"/login"}>
                  <Button
                    text={"Đăng Nhập"}
                    className="bg-transparent border-2 border-primary text-sm hover:bg-primary hover:opacity-100 transition-all"></Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default React.memo(Header);
