import { updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/Button/Button";
import { useMovies } from "../../contexts/MovieContext";
import { firebaseAuth } from "../../firebase-app/firebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import SignBar from "../Signbar/SignBar";
const AccountPage = () => {
  const { handleSelectImage, imagePreview } = useFirebaseImage();

  const [edit, setEdit] = useState(false);
  const handleSetEdit = () => {
    setEdit(!edit);
  };
  const { userInfo } = useMovies();
  useEffect(() => {
    document.title = "Tài khoản";
  }, []);

  const [updateUserName, setUpdateUserName] = useState("");
  const handleChangeAccount = async (e) => {
    try {
      e.preventDefault();
      await updateProfile(firebaseAuth.currentUser, {
        displayName: updateUserName,
      });

      toast.success("Cập nhật thông tin thành công");
    } catch (error) {
      toast.error("Đã có lỗi , vui lòng thử lại!!!");
    }
  };
  const handleUpdateUserAvatar = async (e) => {
    try {
      e.preventDefault();
      await updateProfile(firebaseAuth.currentUser, {
        photoURL: imagePreview,
      });
      toast.success("Cập nhật ảnh đại diện thành công");
    } catch (error) {
      toast.error("Đã có lỗi , vui lòng thử lại!!!");
    }
  };
  return (
    <div className="container-watch mx-auto w-full min-h-[calc(100vh_-_90px)] flex justify-center">
      <SignBar />
      <div className="flex-1 h-full p-10">
        <div className="max-w-[600px] flex items-center justify-between">
          <h1 className="font-medium text-xl">Thông Tin Cá Nhân</h1>
          <span
            onClick={handleSetEdit}
            className={`flex items-center gap-x-2 cursor-pointer ${
              edit ? "fill-blue-500 text-blue-500" : "fill-white"
            }`}>
            <span>Chỉnh sửa</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={`w-5 h-5 cursor-pointer `}>
              <path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" />
            </svg>
          </span>
        </div>
        <div className="mt-10">
          <form onSubmit={handleChangeAccount} className="mb-5">
            <div className="flex items-center gap-2 mb-5">
              <label htmlFor="name" className="min-w-[80px]">
                Tên:{" "}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={userInfo.displayName}
                disabled={!edit}
                onChange={(e) => setUpdateUserName(e.target.value)}
                required
                className={`max-w-[350px] px-5 py-2 rounded-md border outline-none focus:border-blue-500 bg-[#111111] ${
                  edit ? "opacity-100" : "opacity-50"
                }`}></input>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <label htmlFor="email" className="min-w-[80px]">
                Email:{" "}
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder={userInfo.email}
                disabled={true}
                required
                className={`max-w-[350px] px-5 py-2 rounded-md border outline-none focus:border-blue-500 bg-[#111111] opacity-50`}></input>
            </div>
            <Button
              text="Cập Nhật"
              className={`inline w-[150px] text-sm ${
                edit ? "opacity-100" : "opacity-50"
              }`}
              type="submit"
              disabled={!edit}
            />
          </form>
          <form
            className="flex flex-col gap-2 mb-5"
            onSubmit={handleUpdateUserAvatar}>
            <span>Cập nhật ảnh dại diện:</span>
            <label
              htmlFor="file"
              className={`border-2 border-dotted border-gray-200 max-w-[400px] rounded-md h-[150px] flex items-center justify-center ${
                edit ? "cursor-pointer" : "cursor-default"
              } mb-4 ${edit ? "opacity-100" : "opacity-50"}`}>
              <input
                id="file"
                name="file"
                type="file"
                className="hidden"
                onChange={handleSelectImage}
                disabled={!edit}></input>
              {!imagePreview ? (
                <div className="flex flex-col items-center">
                  <img
                    src="https://github.com/evondev/react-course-projects/blob/master/monkey-blogging/public/img-upload.png?raw=true"
                    alt=""
                    className="w-14 h-14 object-cover"
                  />
                  <span className="text-sm pt-2 text-blue-600">Chọn ảnh</span>
                </div>
              ) : (
                <img
                  src={imagePreview}
                  alt=""
                  className="w-20 h-20 rounded-full object-cover"
                />
              )}
            </label>
            <Button
              text="Cập Nhật"
              className={`inline max-w-[150px] text-sm ${
                imagePreview ? "opacity-100" : "opacity-50"
              }`}
              type="submit"
              disabled={!imagePreview}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
