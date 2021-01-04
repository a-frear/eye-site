import React,{Component, useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import eye2 from '../img/asset-2.png'

class Eye2 extends Component {
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
        <ModalVideo channel='youtube' autoplay  isOpen={this.state.isOpen} videoId="z3jTlVILgLw" onClose={() => this.setState({isOpen: false})} />

        <img src={eye2} className="eye-btn" onClick={this.openModal}/>
</React.Fragment>
)
}

}

export default Eye2;