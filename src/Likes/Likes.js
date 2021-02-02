import React, { useState, useEffect } from "react";
import "./Likes.css";
import LikeButton from '../LikeButton/LikeButton';
import config from "../config";

const Likes = (props) => {
  const [likes, setLikes] = useState([]);
  // const [updated, setUpdated] = useState(false);

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
          <LikeButton vidId={props.vidId} likes={likesForVideo} addLike={addLike} />
          </div>
          {/* <div className="imageBox">
            <div className="imageInn">
              <img
                alt="wink-icon"
                src={likeButton}
                className="like-button"
                id="likeVideo"
                onClick={this.handleClick}
              />
            </div>
            <div className="hoverImg">
              <img
                alt="wink-icon-pink"
                src={pinkLikeButton}
                className="like-button"
                id="likeVideo"
                onClick={this.handleClick}
              /> 
            </div>
          </div>*/}
        </form>
      </div>
  );
};

export default Likes;
