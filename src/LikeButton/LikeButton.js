import React, { useState, useEffect } from "react";
import "./LikeButton.css";
import { useAuth0 } from "@auth0/auth0-react";
import likeButton from "../img/white-like-button.png";
import pinkLikeButton from "../img/pink-like-button.png";
import config from "../config";

const LikeButton = (props) => {

    const [likes, setLikes] = useState([])
    const [updated, setUpdated]= useState(false)
    const { user, isAuthenticated } = useAuth0();

    console.log(likes)


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
    if (!updated) {
      setLikes([...likes, like]);
    }
  }

  const findUserLikes = likes.filter((like) => like.user_name === user.nickname)
  console.log(findUserLikes)

  const handleClick = async (e) => {
    e.preventDefault();
    if (findUserLikes.length === 0) { 
      e.preventDefault();
      const newLike = {
      video_id: props.vidId,
      user_name: user.nickname
    };
    fetch(config.API_ENDPOINT_likes, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newLike),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((like) => {
        addLike(like);
        setUpdated(updated);
      })
      .catch((error) => {
        console.error({ error });
      });}
    }


  const getLikesForVideo = (likes=[], video_id) =>
    likes.filter((like) => like.video_id === video_id);

    const video_id = props.vidId;
    const likesForVideo = getLikesForVideo(likes, video_id);
    const buttonSrc = findUserLikes.length === 0 ? likeButton : pinkLikeButton 
    return ( isAuthenticated && (
      <div>
        <form className="like">
          <label>{likesForVideo.length} winks</label>
          <div>
              <img
                alt="wink-icon"
                src={buttonSrc}
                className="like-button"
                id="likeVideo"
                onClick={handleClick}
              />
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
      </div>)
    );

  }  

export default LikeButton;
