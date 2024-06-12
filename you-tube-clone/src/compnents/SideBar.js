import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { LuUserSquare } from "react-icons/lu";
import { GoHistory } from "react-icons/go";
import {
  MdOutlinePlaylistPlay,
  MdOutlineOndemandVideo,
  MdSubscriptions,
} from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchString } from "../utils/searchSlice";

const SideBar = () => {
  const isNavTrue = useSelector((store) => store.navToggle.isNavOpen);
  const watchListItems = useSelector(
    (store) => store.watchVideos.watchListVideos
  );

  const dispatch = useDispatch();

  const setHome = () => {
    dispatch(searchString(""));
  };

  const showSearch = (searchItem) => {
    dispatch(searchString(searchItem));
  };

  return (
    <div className="m-4 mt-6 top-14 w-44">
      {isNavTrue ? (
        <>
          <ul>
            <Link to="/">
              <li className="flex m-2" onClick={setHome}>
                <FaHome size={20} className="mr-3" />
                Home
              </li>
            </Link>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("youtube shorts")}
            >
              <SiYoutubeshorts size={20} className="mr-3" />
              Shorts
            </li>
            {/* <li className="flex m-2">
              <MdSubscriptions size={20} className="mr-3" />
              Subscriptions
            </li> */}
          </ul>
          <hr />
          <h1 className="font-bold">You {" >"}</h1>
          <ul>
            <li className="flex m-2">
              <LuUserSquare size={20} className="mr-3" />
              Your Channel
            </li>
            <li className="flex m-2">
              <GoHistory size={20} className="mr-3" />
              History
            </li>
            <li className="flex m-2" onClick={() => showSearch("playlists")}>
              <MdOutlinePlaylistPlay size={20} className="mr-3" />
              Playlists
            </li>
            <li className="flex m-2">
              <MdOutlineOndemandVideo size={20} className="mr-3" />
              Your Videos
            </li>
            <li className="flex m-2">
              <BiMoviePlay size={20} className="mr-3" />
              Your Movies
            </li>
            <Link to="/watchList">
              <li className="flex m-2 cursor-pointer">
                <FaRegClock size={20} className="mr-3" />
                Watch Later<p className="text-xs">({watchListItems.length})</p>
              </li>
            </Link>
            <li className="flex m-2">
              <AiOutlineLike size={20} className="mr-3" />
              Liked Videos
            </li>
          </ul>
          <hr />
          <h1 className="font-bold">Explore</h1>
          <ul>
            <li
              className="flex m-2"
              onClick={() => showSearch("trending videos")}
            >
              <LuUserSquare size={20} className="mr-3" />
              Trending
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("shopping videos")}
            >
              <GoHistory size={20} className="mr-3" />
              Shopping
            </li>
            <li className="flex m-2" onClick={() => showSearch("music videos")}>
              <MdOutlinePlaylistPlay size={20} className="mr-3" />
              Music
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("youtube movies")}
            >
              <MdOutlineOndemandVideo size={20} className="mr-3" />
              Movies
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("live videos right now")}
            >
              <BiMoviePlay size={20} className="mr-3" />
              Live
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("gaming videos")}
            >
              <FaRegClock size={20} className="mr-3" />
              Gaming
            </li>
            <li className="flex m-2" onClick={() => showSearch("news videos")}>
              <AiOutlineLike size={20} className="mr-3" />
              News
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("sports videos")}
            >
              <AiOutlineLike size={20} className="mr-3" />
              Sports
            </li>
            <li className="flex m-2" onClick={() => showSearch("courses")}>
              <AiOutlineLike size={20} className="mr-3" />
              Courses
            </li>
            <li
              className="flex m-2"
              onClick={() => showSearch("Fasion and beauty videos")}
            >
              <AiOutlineLike size={20} className="mr-3" />
              Fasion & Beauty
            </li>
            <li className="flex m-2" onClick={() => showSearch("podcasts")}>
              <AiOutlineLike size={20} className="mr-3" />
              Podcasts
            </li>
          </ul>
          <hr />
        </>
      ) : (
        <>
          <ul>
            <Link to="/">
              <li className="flex m-2" onClick={setHome}>
                <FaHome size={20} className="mr-3" />
              </li>
            </Link>
            <li className="flex m-2" onClick={setHome}>
              <SiYoutubeshorts size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <MdSubscriptions size={20} className="mr-3" />
            </li>
          </ul>
          <hr />
          <h1 className="font-bold">You {" >"}</h1>
          <ul>
            <li className="flex m-2">
              <LuUserSquare size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <GoHistory size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <MdOutlinePlaylistPlay size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <MdOutlineOndemandVideo size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <BiMoviePlay size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <FaRegClock size={20} className="mr-3" />
            </li>
            <li className="flex m-2">
              <AiOutlineLike size={20} className="mr-3" />
            </li>
          </ul>
          <hr />
        </>
      )}
    </div>
  );
};

export default SideBar;
