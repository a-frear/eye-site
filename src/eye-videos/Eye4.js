import React,{Component, useState} from 'react'
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import eye4 from '../img/asset-2.png'

class Eye4 extends Component {
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
        {/*Matt Promo video*/}
        <ModalVideo channel='youtube' autoplay  isOpen={this.state.isOpen} videoId="dxU6G88Htkc" onClose={() => this.setState({isOpen: false})} />

        <img src={eye4} className="eye-btn" onClick={this.openModal} alt='eye site promo by matthew ober'/>
</React.Fragment>
)
}

}

export default Eye4;