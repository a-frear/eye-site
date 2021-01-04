import React,{Component, useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import eye5 from '../img/asset-5.png'

class Eye5 extends Component {
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
        {/*Amy Teasers video*/}
        <ModalVideo channel='vimeo' autoplay  isOpen={this.state.isOpen} videoId="486954097" onClose={() => this.setState({isOpen: false})} />

        <img src={eye5} className="eye-btn" onClick={this.openModal} alt='Eye Site Teasers'/>
</React.Fragment>
)
}

}

export default Eye5;