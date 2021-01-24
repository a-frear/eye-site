import React, {Component } from 'react'
import './LikeButton.css'
import likeButton from '../img/white-like-button.png'
import pinkLikeButton from '../img/pink-like-button.png'

class LikeButton extends Component {
    constructor () {
        super()
        this.state = {
          likes: 0
        }

        this.addLike = this.addLike.bind(this)
      }
    

    addLike = (e) => {
        e.preventDefault()
        let newCount = this.state.likes + 1;
          this.setState({
          likes: newCount
        });
      };

    render() {
        
          return (
            <div>
            <form className='like'>
                <label>{this.state.likes} winks</label>
                <div className="imageBox">
                <div className="imageInn">
                    <img alt="wink-icon" src={likeButton} className="like-button" id="likeVideo" onClick={this.addLike}/>
				</div>
				<div className="hoverImg">
                    <img alt="wink-icon-pink" src={pinkLikeButton} className="like-button" id="likeVideo" onClick={this.addLike}/>
				</div>
                </div>
            </form>
        </div>
          )
      }
    }

    export default LikeButton