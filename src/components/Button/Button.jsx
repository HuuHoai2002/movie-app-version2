import React from "react";

const Button = ({ text, className = "", onClick, props }) => {
  return (
    <div
      className={`py-[10px] px-5 rounded-3xl flex items-center justify-center leading-none bg-primary font-medium cursor-pointer hover:opacity-80 transition-all ${className}`}
      onClick={onClick}
      {...props}>
      {text}
    </div>
  );
};

export default Button;  
