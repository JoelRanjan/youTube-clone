import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../utils/navSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCache } from "../utils/cacheSlice";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  const dispatch = useDispatch();

  const toggleBar = () => {
    dispatch(toggleNav());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const getSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchValue);
    const jsonData = await data.json();
    setSearchSuggestions(jsonData[1]);
  };

  const onSearch = (event) => {
    // const cacheDetails = useSelector((store) => store.cache.content);
    // if(cacheDetails.includes())
    setSearchValue(event.target.value);
    // const cacheDetails = useSelector(store => store.cache)
  };

  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex m-4">
        <FiAlignJustify size={30} onClick={toggleBar} />
        <img
          src="https://as2.ftcdn.net/v2/jpg/08/01/51/39/1000_F_801513987_N5YF9I5L02DAH4lvXu6guI3ImU5Xblb2.jpg"
          alt="icon"
          className="w-28 px-2"
        />
      </div>
      <div>
        <div className="flex m-4">
          <input
            type="text"
            className="border-2 border-slate-500 w-[34rem] rounded-l-xl px-3"
            placeholder="  Search"
            value={searchValue}
            onChange={onSearch}
            // onChange={(e) => {setSearchValue(e.target.value);dispatch(addCache())}}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <SlMagnifier
            size={30}
            className="border-2 border-slate-500 w-14 rounded-r-xl p-1"
          />
        </div>
        <div className="fixed mx-4 px-3 bg-white w-[34rem]">
          <ul>
            {showSuggestions &&
              searchSuggestions.map((eachSug) => (
                <li className="flex">
                  <SlMagnifier size={20} className="w-14  p-1" />
                  {eachSug}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex m-4">
        <RiVideoAddLine size={30} className="ml-5" />
        <IoIosNotificationsOutline size={30} className="ml-5" />
        <FaRegUserCircle size={30} className="ml-5" />
      </div>
    </div>
  );
}

export default Header;
