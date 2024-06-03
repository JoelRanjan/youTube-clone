import React, { useEffect, useState } from "react";
import TopButtonsContainer from "./TopButtonsContainer";
import { youTubeVideosKey } from "../utils/constants";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const [mainVideoData, setMainVideoData] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videoData = await fetch(youTubeVideosKey);
    const jsonData = await videoData.json();
    setMainVideoData(jsonData.items);
  };

  return (
    <div>
      <TopButtonsContainer />
      <div className="flex flex-wrap">
        {mainVideoData.map((eachvid) => (
          <VideoContainer videoDetails={eachvid} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
