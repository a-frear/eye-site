import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import likeButton from "../img/white-like-button.png";
import pinkLikeButton from "../img/pink-like-button.png";

const LikeButton = (props) => {
  const [likes ] = useState(props.likes);
  const { user, isAuthenticated } = useAuth0();

  const findUserLikes = likes.filter(
    (like) => like.user_name === user.nickname
  );
  const findUserLikesThisVideo = findUserLikes.filter(
    (like) => like.video_id === props.vidId
  )

  const buttonSrc = findUserLikesThisVideo.length === 0 ? likeButton : pinkLikeButton;
  return (
    isAuthenticated && (
            <img
              alt="wink-icon"
              src={buttonSrc}
              className="like-button"
              id="likeVideo"
              onClick={props.handleClick()}
            />
    )
  );
};

export default LikeButton;
