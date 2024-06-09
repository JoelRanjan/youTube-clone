import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const NewComment = ({ comment }) => {
  return (
    <div>
      <div className="flex mt-3">
        <div>
          <FaRegUserCircle size={30} className="ml-1" />
        </div>
        <div className="ml-3">
          <h1 className="font-semibold text-xs">@joelranjan009</h1>
          <p>{comment}</p>
          {/* <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
          <SlLike size={20} />{" "}
          <p className="mx-2">{captionData?.statistics?.likeCount / 1000}K</p>
          <div className="bg-slate-500 w-[0.01rem] py-2 my-1"></div>
          <SlDislike size={20} className=" mx-3" />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewComment;
