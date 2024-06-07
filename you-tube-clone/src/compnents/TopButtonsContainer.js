import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { searchString } from "../utils/searchSlice";

const TopButtonsContainer = () => {
  const buttonsList = [
    "All",
    "Music",
    "Cricket",
    "Cinemas",
    "youTube shorts",
    "Web Development",
    "News",
    "Movies",
    "Action Thrillers",
    "Gaming",
    "Trailers",
    "TV Shows",
  ];
  const dispatch = useDispatch();

  const searchItem = (item) => {
    dispatch(searchString(item));
  };
  return (
    <div className="flex">
      {buttonsList.map((eachButton) => (
        <button onClick={() => searchItem(eachButton)}>
          <Button name={eachButton} />{" "}
        </button>
      ))}
    </div>
  );
};

export default TopButtonsContainer;
