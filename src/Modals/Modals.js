import React,{useState} from 'react'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'
import './Modals.css'

class Modals extends React.Component {
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
    
      openModal () {
        this.setState({isOpen: true})
      }
    
render(){
          return (
          <li>
            <React.Fragment className='fragment'>
                <ModalVideo channel='youtube' autoplay  isOpen={this.state.isOpen} videoId={this.props.vidId} onClose={() => this.setState({isOpen: false})}/>

                <img src={this.props.eyeArt} className="eye-btn" onClick={this.openModal} alt={this.props.altText}/>
            </React.Fragment>
          </li>
        )
      }
}

export default Modals;

