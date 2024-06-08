import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <div className="ml-3">
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
