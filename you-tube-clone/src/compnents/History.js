import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import VideoContainer from "./VideoContainer";

const History = () => {
  const navigate = useNavigate();
  const myHistory = useSelector(
    (store) => store.watchVideos.watchListVideos.history
  );

  const toNavigate = (str) => {
    navigate(str);
  };
  return (
    <div>
      <div>
        <button className="border border-black px-2 m-3">Clear HIstory</button>
      </div>
      <div className="flex flex-wrap">
        {myHistory.map((eachvid) => (
          <div
            onClick={() =>
              toNavigate(
                "/watch?v=" +
                  (eachvid.id.videoId ? eachvid.id.videoId : eachvid.id)
              )
            }
          >
            <VideoContainer videoDetails={eachvid} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
