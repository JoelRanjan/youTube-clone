import React, { useEffect, useState } from "react";
import TopButtonsContainer from "./TopButtonsContainer";
import {
  YOUR_API_KEY,
  youTubeSearchData,
  youTubeVideosKey,
} from "../utils/constants";
import VideoContainer from "./VideoContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainShimmerUi from "./MainShimmerUi";

const MainContainer = () => {
  const [mainVideoData, setMainVideoData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const searchString = useSelector((store) => store.searchStr.str);

  useEffect(() => {
    if (searchString === "") {
      getVideos();
    } else {
      getVideosOnInput();
    }
  }, [searchString]);

  const getVideos = async () => {
    setShowShimmer(true);
    const videoData = await fetch(youTubeVideosKey);
    const jsonData = await videoData.json();
    console.log(jsonData);
    setShowShimmer(false);
    setMainVideoData(jsonData.items);
  };

  const getVideosOnInput = async () => {
    setShowShimmer(true);
    const videosDataOnInput = await fetch(
      youTubeSearchData + searchString + "&key=" + YOUR_API_KEY
    );
    const jsonDataOnInput = await videosDataOnInput.json();
    setShowShimmer(false);
    setMainVideoData(jsonDataOnInput.items);
  };

  if (showShimmer) {
    return <MainShimmerUi />;
  }

  return (
    <div>
      <TopButtonsContainer />
      <div className="flex flex-wrap">
        {mainVideoData.map((eachvid) => (
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

export default MainContainer;
