import React from "react";
import Mainpage from "../pages/Mainpage.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import { ScrollRestoration } from "react-router-dom";

const RouteLayout = () => {
  return (
    <div>
      {/* <Mainpage /> */}
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RouteLayout;
