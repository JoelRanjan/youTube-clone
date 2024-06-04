import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { SlMagnifier } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleNav } from "../utils/navSlice";

function Header() {
  const dispatch = useDispatch();

  const toggleBar = () => {
    dispatch(toggleNav());
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
      <div className="flex m-4">
        <input
          type="text"
          className="border-2 border-slate-500 w-[34rem] rounded-l-xl"
          placeholder="  Search"
        />
        <SlMagnifier
          size={30}
          className="border-2 border-slate-500 w-14 rounded-r-xl p-1"
        />
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
