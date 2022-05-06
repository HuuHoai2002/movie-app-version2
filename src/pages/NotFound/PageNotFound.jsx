import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const PageNotFound = () => {
  const handleNavigate = useNavigate();
  document.title = "Trang không tồn tại";
  return (
    <div className="w-full h-screen relative">
      <img
        src="https://cdn.dribbble.com/users/1967263/screenshots/17038882/media/9d47581e86f28a94613327a899dae45b.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-[80px] left-2/4 -translate-x-2/4 - translate-y-2/4">
        <Button
          text={"Về Trang Chủ"}
          className={"max-w-[200px] py-4 px-10"}
          onClick={() => handleNavigate("/")}></Button>
      </div>
    </div>
  );
};

export default PageNotFound;

// <Button
//   text={"Về Trang Chủ"}
//   className={"max-w-[200px] py-4 px-10"}
//   onClick={() => handleNavigate("/")}></Button>;
