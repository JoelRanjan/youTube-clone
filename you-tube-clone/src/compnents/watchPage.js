import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeNav } from "../utils/navSlice";
import {
  youTubeDataById,
  YOUR_API_KEY,
  youTubeComments,
  videoDataById,
  liveVideoChat,
  oauthClientId,
} from "../utils/constants";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
// import { LuArrowDownToLine } from "react-icons/lu";
import Comment from "./Comment";
import VideoShimmerUi from "./videoShimmerUi";
import { youtubeVideoCategoryById } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoSuggestions from "./VideoSuggestions";
import {
  addToHistory,
  addToMoviesList,
  addToMyVideosList,
  addToWatchList,
} from "../utils/watchListSlice";
import Popup from "reactjs-popup";
import { addComment, updateComment } from "../utils/commentsSlice";
import NewComment from "./NewComment";
import LiveChat from "./LiveChat";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";

const WatchPage = () => {
  const [captionData, setCaptionData] = useState("");
  const [commentsData, setCommentsData] = useState([]);
  const [showWatchShimmer, setShowWatchShimmer] = useState(false);
  const [catId, setCatId] = useState("");
  const [categoryVideoData, setCategoryVideoData] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [commentId, setCommentId] = useState(null);
  // const [token, setToken] = useState(null);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const watchList = useSelector(
    (store) => store.watchVideos.watchListVideos.myWatchList
  );
  const myVideosList = useSelector(
    (store) => store.watchVideos.watchListVideos.myvideos
  );
  const myMoviesList = useSelector(
    (store) => store.watchVideos.watchListVideos.myMovies
  );
  const myHistory = useSelector(
    (store) => store.watchVideos.watchListVideos.history
  );
  const commentsList = useSelector((store) => store.comments.comments);

  useEffect(() => {
    if (commentsList.length > 0) {
      const getCommentId = commentsList.findIndex(
        (obj) => obj.id === searchParams.get("v")
      );
      if (getCommentId !== -1) {
        setCommentId(getCommentId);
      }
    }
    // login();
    // fetchLiveComments();
  }, []);

  // for live youtube chat
  // const login = useGoogleLogin({
  //   onSuccess: (tokenResponse) => {
  //     setToken(tokenResponse.access_token);
  //     console.log(tokenResponse);
  //   },
  //   onError: () => {
  //     console.log("Login Failed");
  //   },
  //   clientId: oauthClientId,
  //   scope: "https://www.googleapis.com/auth/youtube.readonly",
  // });

  // const fetchLiveComments = async () => {
  //   const liveComments = await fetch(
  //     liveVideoChat + searchParams.get("v") + "&key=" + YOUR_API_KEY
  //   );
  //   const liveJson = await liveComments.json();
  //   console.log(liveJson);
  // };

  useEffect(() => {
    dispatch(closeNav());
    fetchCaptions();
    fetchComments();
    // addToHistoryVideos();
  }, [searchParams]);

  useEffect(() => {
    fetchVideoSuggestions();
  }, [catId]);

  const fetchCaptions = async () => {
    setShowWatchShimmer(true);
    const captionsData = await fetch(
      youTubeDataById + searchParams.get("v") + "&key=" + YOUR_API_KEY
    );
    const jsonData = await captionsData.json();
    setCatId(jsonData.items[0].snippet.categoryId);
    setShowWatchShimmer(false);
    setCaptionData(jsonData.items[0]);
    // setTimeout(() => {
    //   fetchVideoSuggestions(catId);
    // }, 1000);
  };

  const fetchComments = async () => {
    const commentsData = await fetch(
      youTubeComments + searchParams.get("v") + "&key=" + YOUR_API_KEY
    );
    const commentsJsonData = await commentsData.json();
    setCommentsData(commentsJsonData?.items);
  };

  const fetchVideoSuggestions = async () => {
    const suggestionsData = await fetch(
      youtubeVideoCategoryById + catId + "&key=" + YOUR_API_KEY
    );
    const suggData = await suggestionsData.json();
    setCategoryVideoData(suggData.items);
  };

  const videoData = async () => {
    const watchData = await fetch(
      videoDataById + searchParams.get("v") + "&key=" + YOUR_API_KEY
    );
    const watchJsonData = await watchData.json();
    return watchJsonData;
  };

  const addToWatch = async () => {
    // const watchData = await fetch(
    //   videoDataById + searchParams.get("v") + "&key=" + YOUR_API_KEY
    // );
    // const watchJsonData = await watchData.json();
    const watchJsonData = await videoData();
    const similarData = watchList.filter(
      (item) => item.snippet.title === captionData?.snippet?.title
    );
    // const similarData = checkSimilarData();
    if (similarData.length === 0) {
      dispatch(addToWatchList(watchJsonData.items));
      alert("Added to watchlist");
    } else {
      alert("Already added");
    }
  };

  const addToVideos = async () => {
    const watchJsonData = await videoData();
    const similarData = myVideosList.filter(
      (item) => item.snippet.title === captionData?.snippet?.title
    );
    if (similarData.length === 0) {
      dispatch(addToMyVideosList(watchJsonData.items));
      alert("Added to My Videos");
    } else {
      alert("Already added");
    }
  };

  const addToMovies = async () => {
    const watchJsonData = await videoData();
    const similarData = myMoviesList.filter(
      (item) => item.snippet.title === captionData?.snippet?.title
    );
    if (similarData.length === 0) {
      dispatch(addToMoviesList(watchJsonData.items));
      alert("Added to My Movies");
    } else {
      alert("Already added");
    }
  };

  const addToHistoryVideos = async () => {
    const watchJsonData = await videoData();
    const similarData = myHistory.filter(
      (item) => item.snippet.title === captionData?.snippet?.title
    );
    if (similarData.length === 0) {
      dispatch(addToHistory(watchJsonData.items));
    }
  };

  const addNewComment = () => {
    if (commentsList.length === 0) {
      const newComment = {
        id: searchParams.get("v"),
        comment: [userComment],
      };
      dispatch(addComment(newComment));
    } else {
      const isCommentPresent = commentsList.filter(
        (item) => item.id === searchParams.get("v")
      );
      if (isCommentPresent.length > 0) {
        const newComment = {
          id: searchParams.get("v"),
          comment: userComment,
        };
        dispatch(updateComment(newComment));
      } else {
        const newComment = {
          id: searchParams.get("v"),
          comment: [userComment],
        };
        dispatch(addComment(newComment));
      }
    }
    if (commentsList.length > 0) {
      const getCommentId = commentsList.findIndex(
        (obj) => obj.id === searchParams.get("v")
      );
      if (getCommentId !== -1) {
        setCommentId(getCommentId);
      } else {
        setCommentId(commentsList.length);
      }
    } else {
      setCommentId(0);
    }
    setUserComment("");
  };

  if (showWatchShimmer) {
    return <VideoShimmerUi />;
  }

  return (
    <div className="p-4 m-4 flex w-full">
      {/* <div> for live youtube chat
        <button onClick={() => login()}>signin</button>
        <h1>{token}</h1>
      </div> */}
      <div className="w-4/6 ml-10">
        <div className=" rounded-lg w-full ">
          <iframe
            className="rounded-lg"
            width="760"
            height="450"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?si=r7IO8KSqHi2TLiGq"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1 className="font-bold my-3 w-96">{captionData?.snippet?.title}</h1>
          <div className="flex">
            <div>
              <FaRegUserCircle size={30} className="ml-1" />
            </div>
            <div>
              <h1 className="font-semibold ml-2 w-44">
                {captionData?.snippet?.channelTitle}
              </h1>
            </div>
            <div className="flex bg-slate-200 rounded-xl px-2 ml-14 pt-1">
              <FaBell size={20} /> <p className="ml-2">Subscribed</p>
            </div>
            <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
              <SlLike size={20} />{" "}
              <p className="mx-2">
                {captionData?.statistics?.likeCount / 1000}K
              </p>
              <div className="bg-slate-500 w-[0.01rem] py-2 my-1"></div>
              <SlDislike size={20} className=" mx-3" />
            </div>
            <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
              <PiShareFat size={20} />
              <Popup
                trigger={<p className="ml-2 w-24">More options</p>}
                position="right center"
              >
                <ul className="text-xs  bg-slate-200 rounded-l px-2 ml-3 pt-1">
                  <li className="cursor-pointer" onClick={addToWatch}>
                    <button>{"->"} Add to Watchlist</button>
                  </li>
                  <li className="cursor-pointer" onClick={addToVideos}>
                    {"->"} Add to My Videos
                  </li>
                  <li className="cursor-pointer" onClick={addToMovies}>
                    {"->"} Add to My Movies
                  </li>
                  {/* <li>Add to My Movies</li> */}
                </ul>
              </Popup>
            </div>
            {/* <div className="flex bg-slate-200 rounded-xl px-2 ml-3 pt-1">
              <LuArrowDownToLine size={20} /> <p className="ml-2">Download</p>
            </div> */}
            {/* <div>
              <ul className="text-xs  bg-slate-200 rounded-xl px-2 ml-3 pt-1">
                <li className="cursor-pointer" onClick={addToWatch}>
                  {"->"} Add to Watchlist
                </li>
                <li className="cursor-pointer">{"->"} Add to My Videos</li>
                
              </ul>
            </div> */}
          </div>
        </div>
        {captionData.snippet &&
        captionData.snippet.liveBroadcastContent === "none" ? (
          <div className="mt-4">
            <h1 className="font-bold">
              {captionData?.statistics?.commentCount / 1000}K Comments
            </h1>
          </div>
        ) : (
          ""
        )}

        <div className="m-5">
          {captionData.snippet &&
          captionData.snippet.liveBroadcastContent === "none" ? (
            <div>
              <div className="flex">
                <FaRegUserCircle size={30} className="ml-1" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className=" ml-4 shadow-md w-full"
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                />
                <hr />
              </div>
              <div className="flex mt-3 float-end">
                <button
                  type="button"
                  className="bg-slate-300 rounded-lg ml-5 px-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-slate-300 rounded-lg ml-5 px-2"
                  onClick={addNewComment}
                >
                  Comment
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          <div>
            {captionData.snippet &&
            captionData.snippet.liveBroadcastContent === "none"
              ? commentId !== null
                ? commentsList.length !== 0
                  ? commentsList[commentId].comment.length > 0
                    ? commentsList[commentId].comment.map((eachComm) => (
                        <NewComment comment={eachComm} />
                      ))
                    : ""
                  : ""
                : ""
              : ""}
          </div>
        </div>
        <div>
          {captionData.snippet &&
          captionData.snippet.liveBroadcastContent === "none"
            ? commentsData.map((eachComment) => (
                <Comment key={eachComment.id} comment={eachComment} />
              ))
            : ""}
        </div>
      </div>
      <div className="w-2/6 ">
        {captionData.snippet &&
        captionData.snippet.liveBroadcastContent === "none" ? (
          categoryVideoData &&
          categoryVideoData.map((eachvid) => (
            <Link
              to={
                "?v=" + (eachvid.id.videoId ? eachvid.id.videoId : eachvid.id)
              }
            >
              <VideoSuggestions videoDetails={eachvid} />
            </Link>
          ))
        ) : (
          <div>
            <div className="flex">
              <LiveChat />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchPage;
