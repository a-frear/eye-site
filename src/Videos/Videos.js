import React from 'react'
import './Videos.css'
import Modals from '../Modals/Modals'
import vidData from '../vidData'

 
class Videos extends React.Component {


render() {
  return (
    <div className='eyes'>
      <ul className='video__list' aria-live='polite'>
          {vidData.map(video =>
            <Modals
              key={video.id}
              vidId={video.id}
              eyeArt={video.eye}
              altText={video.title}
            />
          )}
        </ul>
    </div>
  
)
}
}

export default Videos;