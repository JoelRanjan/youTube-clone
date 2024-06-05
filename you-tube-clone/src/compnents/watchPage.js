import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/navSlice";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNav());
    fetchCaptions();
  }, []);

  const fetchCaptions = async () => {
    const captionsData = await fetch(
      "https://www.googleapis.com/youtube/v3/captions?videoId=dHb9rckCgSE"
    );
    const jsonData = await captionsData.json();
  };

  return (
    <div className="p-4 m-4 rounded-lg">
      <iframe
        className="rounded-lg"
        width="860"
        height="515"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?si=r7IO8KSqHi2TLiGq"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
