import React, { useState, useEffect } from "react";
import LikeButton from "../LikeButton/LikeButton";
import config from "../config";

const Likes = (props) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    fetch(config.API_ENDPOINT_likes, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(setLikes)
      .catch();
  }, []);

  function addLike(like) {
    setLikes([...likes, like]);
  }

  const getLikesForVideo = (likes = [], video_id) =>
    likes.filter((like) => like.video_id === video_id);

  const video_id = props.vidId;
  const likesForVideo = getLikesForVideo(likes, video_id);
  return (
    <div>
      <form className="like">
        <label>{likesForVideo.length} winks</label>
        <div>
          <LikeButton
            vidId={props.vidId}
            likes={likesForVideo}
            addLike={addLike}
          />
        </div>
      </form>
    </div>
  );
};

export default Likes;
