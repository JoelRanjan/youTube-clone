import React, { useEffect } from "react";
import LiveMessage from "./liveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveComment } from "../utils/liveCommentSlice";
import { generateName, makeComment } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const getLiveMessages = useSelector(
    (store) => store.liveComment.liveCommentsList
  );
  console.log(getLiveMessages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addLiveComment({
          name: generateName(),
          message: makeComment(13),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="border border-solid border-black m-2 w-96 h-[450px] overflow-scroll flex flex-col-reverse">
      {getLiveMessages.map((item) => (
        <LiveMessage name={item.name} message={item.message} />
      ))}
    </div>
  );
};

export default LiveChat;
