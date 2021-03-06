import React from "react";
import "./Videos.css";
import VideoListItem from "../VideoListItem/VideoListItem";
import config from "../config";
import LoadingContainer from "../LoadingContainer/LoadingContainer";

class Videos extends React.Component {
  state = {
    videos: [],
    error: null,
    loading: true,
  };

  setVideos = (videos) => {
    this.setState({
      videos,
      error: null,
      loading: false
    });
  };

  componentDidMount() {
    fetch(config.API_ENDPOINT_videos, {
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
      .then(this.setVideos)
      .catch((error) => this.setState({ error }));
  }

  render() {
    if (this.state.loading) return <div className="loading"> <LoadingContainer /> </div>;
    return (
      <div className="eyes">
        {/* for mobile when there is no hover effect */}
        <h3 className='touch-eye'>TOUCH AN EYE</h3>
        <ul className="video__list" aria-live="polite">
          {this.state.videos.map((video) => (
            <VideoListItem
              key={video.id}
              id={video.id}
              vidUrl={video.url}
              eyeArt={video.eye}
              author={video.author}
              altText={video.title}
              pinkEye={video.pink_eye}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Videos;
