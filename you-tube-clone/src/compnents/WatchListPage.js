import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const WatchListPage = () => {
  const watchListItems = useSelector(
    (store) => store.watchVideos.watchListVideos
  );
  return (
    <div>
      <div>
        <button className="border border-black px-2 m-3">
          Clear Watchlist
        </button>
      </div>
      <div className="flex flex-wrap">
        {watchListItems.map((eachvid) => (
          <Link
            to={
              "watch?v=" +
              (eachvid.id.videoId ? eachvid.id.videoId : eachvid.id)
            }
          >
            <VideoContainer videoDetails={eachvid} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
