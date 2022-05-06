import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div
      className={`absolute bg-[#111111] w-[400px] min-h-[300px] top-10 right-0 rounded-lg p-3 shadow-[#292c36] shadow-xl
      `}>
      <h1 className="font-medium mb-3 text-white">Thông Báo</h1>
      <div className="w-full text-secondary">Thông báo ở đấy</div>
    </div>
  );
};

export default Notifications;
