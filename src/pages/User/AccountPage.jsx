import React, { useEffect } from "react";

const AccountPage = () => {
  useEffect(() => {
    document.title = "Tài khoản";
  }, []);
  return (
    <div className="container-watch mx-auto w-full min-h-[calc(100vh_-_90px)]">
      <div className="w-[200px] h-[calc(100vh_-_90px)] sticky left-0 top-[90px]"></div>
      <div className="flex-1 h-[999px]"></div>
    </div>
  );
};

export default AccountPage;
