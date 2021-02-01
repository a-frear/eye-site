import React, { Component } from "react";
import "./LikeButton.css";
import likeButton from "../img/white-like-button.png";
import pinkLikeButton from "../img/pink-like-button.png";
import config from "../config";

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      likes: [],
      updated: false
    };

    this.addLike = this.addLike.bind(this);
  }

  setLikes = (likes) => {
    this.setState({
      likes: likes,
      error: null,
    });
  };

  componentDidMount() {
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
      .then(this.setLikes)
      .catch((error) => this.setState({ error }));
  }

  // addLike = (like) => {
  //   this.setState({
  //     likes: [...this.state.likes, like],
  //   });
  // };

  addLike = (like) => {
    if (!this.state.updated) {
      this.setState({
        likes: [...this.state.likes, like],
        updated: true,
      });
    }
  };

  handleClick = (e) => {
    e.preventDefault();
    const newLike = {
      video_id: this.props.vidId,
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
        this.addLike(like);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  getLikesForVideo = (likes = [], video_id) =>
    likes.filter((like) => like.video_id === video_id);

  render() {
    const likes = this.state.likes;
    const video_id = this.props.vidId;
    const likesForVideo = this.getLikesForVideo(likes, video_id);
    const buttonSrc = this.state.updated ? likeButton : pinkLikeButton
    return (
      <div>
        <form className="like">
          <label>{likesForVideo.length} winks</label>
          <div>
              <img
                alt="wink-icon"
                src={buttonSrc}
                className="like-button"
                id="likeVideo"
                onClick={this.handleClick}
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
              /> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LikeButton;
