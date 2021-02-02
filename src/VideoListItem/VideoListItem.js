import React from "react";
import Modal from "../Modal/Modal";
import "./VideoListItem.css";
import Likes from "../Likes/Likes";
import Comments from "../Comments/Comments";

class VideoListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };

    this.showModal = this.showModal.bind(this);
  }

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <li className="video-list">
        <div className="fragment">
          <div className="imageBox">
            <div className="imageInn">
              <img
                alt={this.props.altText}
                src={this.props.eyeArt}
                className="eye-btn"
                id={this.props.vidId}
                onClick={(e) => {
                  this.showModal();
                }}
              />
            </div>
            <div className="hoverImg">
              <img
                alt={this.props.altText}
                src={this.props.pinkEye}
                className="eye-btn"
                id={this.props.vidId}
                onClick={(e) => {
                  this.showModal();
                }}
              />
            </div>
          </div>
          <Modal onClose={this.showModal} show={this.state.show}>
            <div className="modal-container">
              <div>
                <button
                  className="close"
                  onClick={(e) => {
                    this.showModal(e);
                  }}
                >
                  &times;
                </button>
              </div>
              <div className="content-wrapper">
                <iframe
                  width="560"
                  height="315"
                  title="video"
                  src={this.props.vidUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <Likes vidId={this.props.id} />
                <Comments vidId={this.props.id} />
                <div className="subtitle">
                  <hr className="break" />
                  <h4 id="author">VIDEO BY {this.props.author}</h4>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
