import React,{useState} from 'react'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import './Videos.css'
import Eye1 from '../eye-videos/Eye1'
import Eye2 from '../eye-videos/Eye2'
import Eye3 from '../eye-videos/Eye3'
import Eye4 from '../eye-videos/Eye4'
import Eye5 from '../eye-videos/Eye5'
import Eye6 from '../eye-videos/Eye6'
import Eye7 from '../eye-videos/Eye7'
import Eye8 from '../eye-videos/Eye8'
 
class Enter extends React.Component {
    render () {
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
}

export default Enter;