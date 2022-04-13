import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

const PageNotFound = () => {
  const handleNavigate = useNavigate();
  document.title = "Trang không tồn tại";
  return (
    <div className="container mx-auto h-[50vw] flex items-center justify-center flex-col gap-y-10">
      <img src="https://galaxyplay.vn/main/assets/img/404.svg" alt="" />
      <div className="max-w-[500px] flex flex-col gap-y-20 items-center">
        <h1 className="text-2xl font-medium leading-10 text-center">
          Rất tiếc, không thể tìm thấy trang bạn mong muốn. Vui lòng kiểm tra
          lại!
        </h1>
        <Button
          text={"Về Trang Chủ"}
          className={"max-w-[200px] py-4 px-10"}
          onClick={() => handleNavigate("/")}></Button>
      </div>
    </div>
  );
};

export default PageNotFound;
