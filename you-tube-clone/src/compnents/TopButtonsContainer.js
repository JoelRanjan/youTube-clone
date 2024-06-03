import React from "react";
import Button from "./Button";

const TopButtonsContainer = () => {
  const buttonsList = [
    "All",
    "Music",
    "Cricket",
    "Cinemas",
    "Sketch Comedy",
    "Web Development",
    "News",
    "Movies",
    "Action Thrillers",
    "Gaming",
    "Trailers",
    "TV Shows",
  ];
  return (
    <div className="flex">
      {buttonsList.map((eachButton) => (
        <Button name={eachButton} />
      ))}
    </div>
  );
};

export default TopButtonsContainer;
