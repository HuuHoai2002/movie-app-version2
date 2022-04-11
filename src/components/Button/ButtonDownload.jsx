import React from "react";

const ButtonDownload = ({ text, className = "", onClick }) => {
  return (
    <div
      className={`cursor-pointer p-[10px] border-2 border-[#323233] inline-flex items-center justify-center gap-x-2 rounded-full hover:opacity-80 transition-all ${className}`}
      onClick={onClick}>
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
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
    </div>
  );
};

export default ButtonDownload;
