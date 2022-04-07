import React from "react";

const ButtonPlay = ({ text, className = "", onClick }) => {
  return (
    <div
      className={`cursor-pointer py-2 max-w-[300px] flex items-center justify-center gap-x-2 bg-primary rounded-3xl hover:opacity-80 transition-all ${className}`}
      onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </div>
  );
};

export default ButtonPlay;
