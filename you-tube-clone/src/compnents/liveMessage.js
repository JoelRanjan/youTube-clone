import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const liveMessage = ({ name, message }) => {
  return (
    <div className="m-2 flex">
      <FaRegUserCircle size={20} className="mt-1 mr-1" />
      <p className="mr-2 mt-1text-xs font-bold">{name}</p>
      <p className="text-xs mt-1">{message}</p>
    </div>
  );
};

export default liveMessage;
