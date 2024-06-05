import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/navSlice";
import {
  youTubeDataById,
  YOUR_API_KEY,
  youTubeComments,
} from "../utils/constants";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { LuArrowDownToLine } from "react-icons/lu";
import Comment from "./Comment";

const WatchPage = () => {
  const [captionData, setCaptionData] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeNav());
    fetchCaptions();
    fetchComments();
  }, []);

  const fetchCaptions = async () => {
    const captionsData = await fetch(
      youTubeDataById + searchParams.get("v") + "&key=" + YOUR_API_KEY
    );
    const jsonData = await captionsData.json();
    setCaptionData(jsonData.items[0]);
  };

  const fetchComments = async () => {
    const commentsData = await fetch(
      youTubeComments + searchParams.get("v") + "&key=" + YOUR_API_KEY
    );
    const commentsJsonData = await commentsData.json();
    setCommentsData(commentsJsonData?.items);
  };

  return (
    <div className="p-4 m-4">
      <div className=" rounded-lg">
        <iframe
          className="rounded-lg"
          width="860"
          height="450"
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
      <div>
        <h1 className="font-bold my-3">{captionData?.snippet?.title}</h1>
        <div className="flex">
          <div>
            <FaRegUserCircle size={30} className="ml-1" />
          </div>
          <div>
            <h1 className="font-semibold ml-2">
              {captionData?.snippet?.channelTitle}
            </h1>
          </div>
          <div className="flex bg-slate-200 rounded-xl px-2 ml-14 pt-1">
            <FaBell size={20} /> <p className="ml-2">Subscribed</p>
          </div>
          <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
            <SlLike size={20} />{" "}
            <p className="mx-2">{captionData?.statistics?.likeCount / 1000}K</p>
            <div className="bg-slate-500 w-[0.01rem] py-2 my-1"></div>
            <SlDislike size={20} className=" mx-3" />
          </div>
          <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
            <PiShareFat size={20} /> <p className="ml-2">Share</p>
          </div>
          <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
            <LuArrowDownToLine size={20} /> <p className="ml-2">Download</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="font-bold">
          {captionData?.statistics?.commentCount / 1000}K Comments
        </h1>
      </div>
      <div>
        {commentsData.map((eachComment) => (
          <Comment key={eachComment.id} comment={eachComment} />
        ))}
      </div>
    </div>
  );
};

export default WatchPage;
