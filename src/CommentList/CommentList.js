import React, {Component } from 'react'
import './CommentList.css'

class CommentList extends Component {

    getCommentsForVideo = (comments=[], video_id) => (
          comments.filter(comment => comment.video_id === video_id)
      )

    render() {
        const comments = this.props.comments
        const video_id  = this.props.vidId
        const commentsForVideo = this.getCommentsForVideo(comments, video_id)

          return (
              <div>
                <ul className='comment-list'>
                  {commentsForVideo.map(comment =>
                        <li className='comment-list-item' key={comment.id}>
                            <h3 className='user'>{comment.user_name}:</h3>
                            <p className='message'>{comment.content}</p>
                        </li>
                    )}
                </ul>
              </div>
          )
      }
    }

    export default CommentList