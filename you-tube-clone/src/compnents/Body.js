import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
