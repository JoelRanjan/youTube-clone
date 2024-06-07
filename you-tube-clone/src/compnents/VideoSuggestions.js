import React from "react";

const VideoSuggestions = ({ videoDetails }) => {
  const { snippet, statistics } = videoDetails;
  return (
    <div className=" m-2 flex hover:shadow-lg">
      <div>
        <img
          src={snippet.thumbnails.medium.url}
          alt="img"
          className="rounded-lg"
        />
      </div>

      <div className="flex mt-3">
        <div className="ml-3 ">
          <h1 className="font-semibold ">{snippet.title.slice(0, 40)}...</h1>
          <h2 className="text-slate-600 text-sm">{snippet.channelTitle}</h2>
          {statistics ? (
            <p className="text-slate-600 text-sm">
              {Math.floor(statistics?.viewCount / 1000)}K Views
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestions;
