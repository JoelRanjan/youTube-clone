import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const VideoContainer = ({ videoDetails }) => {
  const { snippet, statistics } = videoDetails;
  console.log(videoDetails);
  return (
    <div className="m-2 p-2 w-72 hover:shadow-lg">
      <img
        src={snippet.thumbnails.medium.url}
        alt="img"
        className="rounded-lg"
      />
      <div className="flex mt-3">
        <div>
          <FaRegUserCircle size={30} />
        </div>
        <div className="ml-3 ">
          <h1 className="font-semibold ">{snippet.title}</h1>
          <h2 className="text-slate-600 text-sm">{snippet.channelTitle}</h2>
          <p className="text-slate-600 text-sm">
            {Math.floor(statistics?.viewCount / 1000000)}M Views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
