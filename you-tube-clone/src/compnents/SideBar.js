import React from "react";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { LuUserSquare } from "react-icons/lu";
import { GoHistory, GoTrophy, GoLightBulb } from "react-icons/go";
import {
  MdOutlinePlaylistPlay,
  MdOutlineOndemandVideo,
  MdSubscriptions,
  MdOutlineShoppingBag,
  MdPodcasts,
} from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { FaRegClock, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchString } from "../utils/searchSlice";
import { ImFire } from "react-icons/im";
import { IoMdMusicalNote } from "react-icons/io";
import { CgLivePhoto } from "react-icons/cg";
import { LiaNewspaperSolid } from "react-icons/lia";
import Popup from "reactjs-popup";

const SideBar = () => {
  const isNavTrue = useSelector((store) => store.navToggle.isNavOpen);
  const watchListItems = useSelector(
    (store) => store.watchVideos.watchListVideos
  );
  const myVideosItems = useSelector(
    (store) => store.watchVideos.watchListVideos.myvideos
  );

  const myMoviesItems = useSelector(
    (store) => store.watchVideos.watchListVideos.myMovies
  );

  const dispatch = useDispatch();

  const setHome = () => {
    dispatch(searchString(""));
  };

  const showSearch = (searchItem) => {
    dispatch(searchString(searchItem));
  };

  return (
    <div className="ml-2 mt-6 top-14">
      {isNavTrue ? (
        <div className="w-40">
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
          </ul>
          <hr />
          <h1 className="font-bold">You {" >"}</h1>
          <ul>
            <Popup
              trigger={
                <li className="flex m-2 cursor-pointer">
                  <LuUserSquare size={20} className="mr-3" />
                  Your Channel
                </li>
              }
              position="right center"
            >
              <div className="flex bg-slate-100 p-3 rounded-lg">
                <div>
                  <FaRegUserCircle size={30} className="mr-5" />
                </div>
                <div>
                  <h1>Joel Ranjan</h1>
                  <h1>@joelranjan009@gmail.com</h1>
                </div>
              </div>
            </Popup>
            {/* <Link to="/history">
              <li className="flex m-2">
                <GoHistory size={20} className="mr-3" />
                History
              </li>
            </Link> */}
            <li className="flex m-2" onClick={() => showSearch("playlists")}>
              <MdOutlinePlaylistPlay size={20} className="mr-3" />
              Playlists
            </li>
            <Link to="/myVideos">
              <li className="flex m-2">
                <MdOutlineOndemandVideo size={20} className="mr-3" />
                Your Videos
                <p className="text-xs">({myVideosItems.length})</p>
              </li>
            </Link>
            <Link to="/myMovies">
              <li className="flex m-2">
                <BiMoviePlay size={20} className="mr-3" />
                Your Movies
                <p className="text-xs">({myMoviesItems.length})</p>
              </li>
            </Link>
            <Link to="/watchList">
              <li className="flex m-2 cursor-pointer">
                <FaRegClock size={20} className="mr-3" />
                Watch Later
                <p className="text-xs">({watchListItems.myWatchList.length})</p>
              </li>
            </Link>
          </ul>
          <hr />
          <h1 className="font-bold">Explore</h1>
          <ul>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("trending videos")}
            >
              <ImFire size={20} className="mr-3" />
              Trending
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("shopping videos")}
            >
              <MdOutlineShoppingBag size={20} className="mr-3" />
              Shopping
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("music videos")}
            >
              <IoMdMusicalNote size={20} className="mr-3" />
              Music
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("youtube movies")}
            >
              <MdOutlineOndemandVideo size={20} className="mr-3" />
              Movies
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("live videos right now")}
            >
              <CgLivePhoto size={20} className="mr-3" />
              Live
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("gaming videos")}
            >
              <SiYoutubegaming size={20} className="mr-3" />
              Gaming
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("news videos")}
            >
              <LiaNewspaperSolid size={20} className="mr-3" />
              News
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("sports videos")}
            >
              <GoTrophy size={20} className="mr-3" />
              Sports
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("courses")}
            >
              <GoLightBulb size={20} className="mr-3" />
              Courses
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("Fasion and beauty videos")}
            >
              <MdOutlineShoppingBag size={20} className="mr-3" />
              Fasion & Beauty
            </li>
            <li
              className="flex m-2 cursor-pointer"
              onClick={() => showSearch("podcasts")}
            >
              <MdPodcasts size={20} className="mr-3" />
              Podcasts
            </li>
          </ul>
          <hr />
        </div>
      ) : (
        <>
          {/* <ul>
            <Link to="/">
              <li className="flex m-2 cursor-pointer" onClick={setHome}>
                <FaHome size={20} className="mr-3" />
              </li>
            </Link>
            <li className="flex m-2 cursor-pointer" onClick={setHome}>
              <SiYoutubeshorts size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <MdSubscriptions size={20} className="mr-3" />
            </li>
          </ul>
          <hr />
          <h1 className="font-bold">You {" >"}</h1>
          <ul>
            <li className="flex m-2 cursor-pointer">
              <LuUserSquare size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <GoHistory size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <MdOutlinePlaylistPlay size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <MdOutlineOndemandVideo size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <BiMoviePlay size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <FaRegClock size={20} className="mr-3" />
            </li>
            <li className="flex m-2 cursor-pointer">
              <AiOutlineLike size={20} className="mr-3" />
            </li>
          </ul>
          <hr /> */}
        </>
      )}
    </div>
  );
};

export default SideBar;
