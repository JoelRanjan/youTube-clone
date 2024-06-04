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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isNavTrue = useSelector((store) => store.navToggle.isNavOpen);

  return (
    <div className="m-4 ">
      {isNavTrue ? (
        <>
          <ul>
            <Link to="/">
              <li className="flex m-2">
                <FaHome size={20} className="mr-3" />
                Home
              </li>
            </Link>
            <li className="flex m-2">
              <SiYoutubeshorts size={20} className="mr-3" />
              Shorts
            </li>
            <li className="flex m-2">
              <MdSubscriptions size={20} className="mr-3" />
              Subscriptions
            </li>
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
            <li className="flex m-2">
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
            <li className="flex m-2">
              <FaRegClock size={20} className="mr-3" />
              Watch Later
            </li>
            <li className="flex m-2">
              <AiOutlineLike size={20} className="mr-3" />
              Liked Videos
            </li>
          </ul>
          <hr />
        </>
      ) : (
        <>
          <ul>
            <Link to="/">
              <li className="flex m-2">
                <FaHome size={20} className="mr-3" />
              </li>
            </Link>
            <li className="flex m-2">
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
