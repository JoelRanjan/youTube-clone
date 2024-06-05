import React from "react";

const Comment = ({ comment }) => {
  const { snippet } = comment;
  const { topLevelComment } = snippet;
  return (
    <div className="flex m-3">
      <div>
        <img
          src={topLevelComment?.snippet?.authorProfileImageUrl}
          alt="pp"
          className="w-8 h-8 rounded-2xl"
        />
      </div>
      <div className="ml-3">
        <h1 className="font-semibold text-xs">
          {topLevelComment?.snippet?.authorDisplayName}
        </h1>
        <p>{topLevelComment?.snippet?.textDisplay}</p>
        {/* <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
          <SlLike size={20} />{" "}
          <p className="mx-2">{captionData?.statistics?.likeCount / 1000}K</p>
          <div className="bg-slate-500 w-[0.01rem] py-2 my-1"></div>
          <SlDislike size={20} className=" mx-3" />
        </div> */}
      </div>
    </div>
  );
};

export default Comment;
