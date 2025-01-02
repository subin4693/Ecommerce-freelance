import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-1 md:px-20 lg:px-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
