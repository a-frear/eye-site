import React from 'react'
import './Videos.css'
import Modals from '../Modals/Modals'
import vidData from '../vidData'

 
class Enter extends React.Component {


render() {
  return (
    <div>
      <ul className='BookmarkList__list' aria-live='polite'>
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
    
  
 { /*render () {
      return (
      <div className='eyes'>


        <Eye1 />
        <Eye2 />
        <Eye3 />
        <Eye4 />
        <Eye5 />
        <Eye6 />
        <Eye7 />
      <Eye8 />
      </div>
       
    )}
}*/}

export default Enter;