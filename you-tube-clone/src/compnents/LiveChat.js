import React, { useEffect, useState } from "react";
import LiveMessage from "./liveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addLiveComment } from "../utils/liveCommentSlice";
import { generateName, makeComment } from "../utils/helper";

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState("");
  const dispatch = useDispatch();
  const getLiveMessages = useSelector(
    (store) => store.liveComment.liveCommentsList
  );
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

  const sendMessage = () => {
    dispatch(
      addLiveComment({
        name: "Joel Ranjan",
        message: userMessage,
      })
    );
    setUserMessage("");
  };
  return (
    <div>
      <div className="border border-solid border-black m-2 w-96 h-[450px] overflow-scroll flex flex-col-reverse">
        {getLiveMessages.map((item) => (
          <LiveMessage name={item.name} message={item.message} />
        ))}
      </div>
      <div className="border border-solid border-black m-2 w-96">
        <input
          type="text"
          className="bg-slate-200 rounded-xl border-slate-800 w-64 m-2 pl-3"
          placeholder="       Enter text...."
          onChange={(e) => setUserMessage(e.target.value)}
          value={userMessage}
        />
        <button
          className="bg-slate-200 rounded-lg border border-slate-800 px-2 ml-3"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
