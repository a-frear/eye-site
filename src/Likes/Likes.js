import React, { useState, useEffect } from "react";
import "./Likes.css";
import { useAuth0 } from "@auth0/auth0-react";
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

  const handleClick = async (e) => {
    e.preventDefault();
    const { user, getAccessTokenSilently } = useAuth0()
    const findUserLikes = likes.filter(
      (like) => like.user_name === user.nickname
    );
    const findUserLikesThisVideo = findUserLikes.filter(
      (like) => like.video_id === props.vidId
    )
    if (findUserLikesThisVideo.length === 0) {
      e.preventDefault();
      const token = await getAccessTokenSilently();
      const newLike = {
        video_id: props.vidId,
        user_name: user.nickname,
      };
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
          addLike(like);
        })
        .catch((error) => {
          console.error({ error });
        });
    }
  };

  const getLikesForVideo = (likes = [], video_id) =>
    likes.filter((like) => like.video_id === video_id);

  const video_id = props.vidId;
  const likesForVideo = getLikesForVideo(likes, video_id);
  return (
      <div>
        <form className="like">
          <label>{likesForVideo.length} winks</label>
          <div>
          <LikeButton vidId={props.vidId} likes={likes} handleClick={handleClick}/>
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
