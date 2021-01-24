import React from 'react'
import Modal from '../Modal/Modal'
import './VideoListItem.css'
import vidData from '../vidData'
import LikeButton from '../LikeButton/LikeButton'
import CommentForm from '../CommentForm/CommentForm'

class VideoListItem extends React.Component {
    constructor () {
        super()
        this.state = {
          videos: vidData,
          show: false,
        }

        this.showModal = this.showModal.bind(this)
      }
    
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    
render(){
          return (
          <li className='video-list'>
            <div className='fragment'>
            <div className="imageBox">
            <div className="imageInn">
                    <img alt={this.props.altText} src={this.props.eyeArt} className="eye-btn" id={this.props.vidId} onClick={e => {
              this.showModal();
         }}/>
				</div>
				<div className="hoverImg">
                    <img alt={this.props.altText} src={this.props.pinkEye} className="eye-btn"  id={this.props.vidId} onClick={e => {
              this.showModal();
         }}/>
				</div>
            </div>
            {/*<input type="image" src={this.props.eyeArt} alt={this.props.eyeArtPink} name="eye-btn-pink" className="eye-btn" id="eye-btn-pink" onClick={e => {
              this.showModal();
         }}/>*/}
            <Modal onClose={this.showModal} show={this.state.show}>
              <div className="modal-container">
              <div>
                <button className="close"
                onClick={e => {this.showModal(e);}}
                >
                &times;
                </button>
            </div>
            <div className='content-wrapper'>
                <iframe width="560" height="315" title="video" src={this.props.vidUrl} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <LikeButton />
                <CommentForm />
                </div>
                </div>
                </Modal>
                {/*<ModalVideo channel='youtube' autoplay  isOpen={this.state.isOpen} videoId={this.props.vidId} onClose={() => this.setState({isOpen: false})}/>
                <img src={this.props.eyeArt} className="eye-btn" onClick={this.openModal} alt={this.props.altText}/>*/}
            </div>
          </li>
        )
      }
}

export default VideoListItem;

