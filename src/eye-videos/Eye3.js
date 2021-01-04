import React,{Component, useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import eye3 from '../img/asset-3.png'

class Eye3 extends Component {
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
      
render() {
    return (
    <React.Fragment>
        {/*Amy Eye Sweat*/}
        <ModalVideo channel='vimeo' autoplay  isOpen={this.state.isOpen} videoId="478538713" onClose={() => this.setState({isOpen: false})} />

        <img src={eye3} className="eye-btn" onClick={this.openModal} alt='eye sweat'/>
</React.Fragment>
)
}

}

export default Eye3;