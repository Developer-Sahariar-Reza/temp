import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <div className="md:min-h-[calc(100vh-604px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
