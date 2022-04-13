import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = ({ onClick }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  document.title = "Đăng Ký Tài Khoản";
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Định dạng email không hợp lệ")
          .required("Bắt buộc"),
        password: Yup.string()
          .min(8, "Mật khẩu phải tối thiểu 8 ký tự")
          .required("Bắt buộc"),
      })}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 3000));
        console.log(values);
      }}>
      {(formik) => (
        <Form
          className="w-full max-w-[400px] mx-auto font-poppins p-5 rounded-lg bg-[#111111]"
          autoComplete="off">
          <div className="flex flex-col gap-2 mb-5">
            <Field
              name="email"
              type="text"
              placeholder="Email"
              required
              className="p-3 rounded-lg outline-none border focus:border-purple-600 text-black"></Field>
            <div className="text-sm text-red-500 font-medium">
              <ErrorMessage name="email"></ErrorMessage>
            </div>
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <div className="relative">
              <Field
                name="password"
                type={hidePassword ? "password" : "text"}
                placeholder="Mật khẩu"
                className="p-3 rounded-lg outline-none border focus:border-purple-600 text-black w-full"></Field>
              <div className="absolute right-0 top-2/4 -translate-y-2/4 mr-5">
                <div className="flex items-center justify-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 absolute fill-[#191A1F] ${
                      hidePassword ? "" : "hidden"
                    }`}
                    onClick={handleHidePassword}
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                      clipRule="evenodd"
                    />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 absolute fill-[#191A1F] ${
                      hidePassword ? "hidden" : ""
                    }`}
                    onClick={handleHidePassword}
                    viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-sm text-red-500 font-medium">
              <ErrorMessage name="password"></ErrorMessage>
            </div>
          </div>
          <div className="mb-10">
            <button
              type="submit"
              className={`w-full flex items-center justify-center p-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-all`}
              disabled={formik.isSubmitting}>
              {formik.isSubmitting ? "" : "Đăng ký"}
              <span
                className={`${
                  formik.isSubmitting
                    ? "w-6 h-6 rounded-full border border-white border-t-transparent animate-spin"
                    : ""
                }`}></span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-x-2 font-medium text-sm">
            <span>Bạn đã có tài khoản?</span>
            <span
              className="text-blue-600 cursor-pointer hover:opacity-70"
              onClick={onClick}>
              Đăng nhập ngay
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
