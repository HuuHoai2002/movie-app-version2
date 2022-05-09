import { Outlet } from "react-router-dom";
import SignBar from "../Signbar/SignBar";

const AccountPage = () => {
  return (
    <div className="container-watch mx-auto w-full min-h-[calc(100vh_-_90px)] flex justify-center">
      <SignBar />
      <div className="flex-1 h-full p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default AccountPage;
