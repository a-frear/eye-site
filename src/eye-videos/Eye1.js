import React,{Component, useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import eye1 from '../img/asset-1.png'

class Eye1 extends Component {
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
        {/*Amy Eye Love You*/}
        <ModalVideo channel='vimeo' autoplay  isOpen={this.state.isOpen} videoId="481302037" onClose={() => this.setState({isOpen: false})} />

        <img src={eye1} className="eye-btn" onClick={this.openModal} alt='eye love you'/>
</React.Fragment>
)
}

}

export default Eye1;