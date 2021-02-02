import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import likeButton from "../img/white-like-button.png";
import pinkLikeButton from "../img/pink-like-button.png";
import config from "../config";

const LikeButton = (props) => {
  const [likes, setLikes ] = useState([]);
  const [updated, setUpdated ] = useState(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

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


  const findUserLikes = likes.filter(
    (like) => like.user_name === user.nickname
  );
  const findUserLikesThisVideo = findUserLikes.filter(
    (like) => like.video_id === props.vidId
  )

const handleClick = async (e) => {
  e.preventDefault();
  if (!updated){
  if (findUserLikesThisVideo.length === 0) {
    const newLike = {
      video_id: props.vidId,
      user_name: user.nickname,
    };
    const token = await getAccessTokenSilently();
    fetch(config.API_ENDPOINT_likes, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newLike),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((like) => {
        props.addLike(like);
      })
      .then(setUpdated(true))
      .catch((error) => {
        console.error({ error });
      });
  }}
};

  const buttonSrc = findUserLikesThisVideo.length === 0 && !updated ? likeButton : pinkLikeButton;
  return (
    isAuthenticated && (
            <img
              alt="wink-icon"
              src={buttonSrc}
              className="like-button"
              id="likeVideo"
              onClick={(e) => handleClick(e)}
            />
    )
  );
};

export default LikeButton;
