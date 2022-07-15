import React, { Fragment, useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useMovies } from "../../contexts/MovieContext";
import useClickOutSide from "../../hooks/useClickOutSide";
import Button from "../Button/Button";
import { ListLink } from "./ListLink";
import UserPreview from "./UserPreview";
import Notifications from "../Notification/Notifications";
import Logo from "../Icons/Logo";
import SearchIcon from "../Icons/SearchIcon";
import NotificationIcon from "../Icons/NotificationIcon";

const Header = () => {
  //background
  const [background, setBackground] = useState(false);
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
  const { isLogin, userInfo } = useMovies();
  return (
    <Fragment>
      <div
        className={`fixed top-0 right-0 z-[99999] h-[70px] px-7 w-full flex items-center transition-all ${
          background ? "!bg-[#111111]" : ""
        }`}>
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex items-center gap-x-7 text-secondary font-medium">
            <Logo />
            {ListLink.map((item) => (
              <NavLink to={item.to} key={item.id} className={activeLink}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-x-7">
            <SearchIcon />
            <div className="cursor-pointer relative" ref={nodeRef}>
              <NotificationIcon onClick={() => setShow(!show)} />
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-3xl bg-primary text-xs flex items-center justify-center">
                {notifications.length}
              </div>
              {show && <Notifications notifications={notifications} />}
            </div>
            <div>
              {isLogin ? (
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
