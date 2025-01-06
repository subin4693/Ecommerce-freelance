import React from "react";
import { Outlet } from "react-router";
import growposter from "@/assets/growposter.jpg";

const AuthLayout = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div
        className={
          "  md:p-0 md:w-[70vw] flex shadow-lg rounded-3xl overflow-hidden border"
        }
      >
        <div className="hidden md:flex flex-1 shadow-3xl ">
          <img
            src={growposter}
            alt="banner"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
