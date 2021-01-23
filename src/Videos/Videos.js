import React from 'react'
import './Videos.css'
import VideoListItem from '../VideoListItem/VideoListItem'
import vidData from '../vidData'

 
class Videos extends React.Component {
  state = {
    videos: vidData
  };

render() {
  return (
    <div className='eyes'>
      <ul className='video__list' aria-live='polite'>
          {this.state.videos.map(video =>
            <VideoListItem
              key={video.id}
              vidUrl={video.url}
              eyeArt={video.eye}
              altText={video.title}
              likes={video.likes}
              pinkEye={video.pink_eye}
            />
          )}
        </ul>
    </div>
  
)
}
}

export default Videos;