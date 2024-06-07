import React from "react";

const VideoShimmerUi = () => {
  return (
    <div>
      <div className="p-4 m-4">
        <div className=" rounded-lg w-[860px] h-[450px] bg-slate-200"></div>
        <div className=" rounded-lg w-[860px] h-10 bg-slate-200"></div>
        <div>
          <div className="m-2 p-2 w-96 h-2 bg-slate-200 rounded-lg"></div>

          <p className="m-2 p-2 w-72 h-2 bg-slate-200 rounded-lg"></p>
          <p className="m-2 p-2 w-36 h-2 bg-slate-200 rounded-lg"></p>
        </div>
      </div>
    </div>
  );
};

export default VideoShimmerUi;
