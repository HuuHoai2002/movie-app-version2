import React from "react";

const ButtonAdult = ({ text = "10", className = "" }) => {
  return (
    <div
      className={`py-[10px] inline px-5 rounded-lg leading-none bg-[#990000] font-medium cursor-pointer ${className}`}>
      {text}+
    </div>
  );
};

export default ButtonAdult;
