import React from "react";

const Button = ({
  text,
  className = "",
  onClick,
  outline = false,
  ...props
}) => {
  return (
    <button
      className={`py-[10px] px-5 rounded-3xl flex items-center justify-center leading-none bg-primary font-medium transition-all ${className} ${
        outline && ""
      }`}
      onClick={onClick}
      {...props}>
      {text}
    </button>
  );
};

export default Button;
